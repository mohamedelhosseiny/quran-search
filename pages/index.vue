<script setup lang="ts">
  import { ref, watch, computed } from "vue";
  import { useDebounceFn, debouncedRef } from "@vueuse/core";
  import { useQuranVerses } from "~/composables/useQuranVerses";

  interface QuranVerse {
    id: number;
    text: string;
    surah_number: number;
    verse_number: number;
    verse: string;
    translation_eng?: string;
  }

  const searchQuery = ref("");
  const debouncedQuery = debouncedRef(searchQuery, 300);

  const { data: verses, isLoading, error } = useQuranVerses(debouncedQuery);

  const hasResults = computed(() => verses.value && verses.value.length > 0);
  const noResults = computed(
    () =>
      !isLoading.value &&
      verses.value &&
      verses.value.length === 0 &&
      debouncedQuery.value
  );
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-tajawal" dir="rtl">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- Header -->
      <header class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">البحث في القرآن</h1>
        <p class="text-gray-600">ابحث في آيات القرآن الكريم</p>
      </header>

      <!-- Search Input -->
      <div class="relative mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white shadow-sm text-lg"
            placeholder="اكتب للبحث في الآيات..."
          />
          <div
            v-if="isLoading"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <div
              class="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"
            ></div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div
        v-if="error"
        class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600"
      >
        {{ error.message }}
      </div>

      <!-- Results -->
      <div v-if="hasResults" class="space-y-4">
        <QuranVerse
          v-for="verse in verses"
          :key="`${verse.surah_number}-${verse.verse_number}`"
          :verse="verse"
        />
      </div>

      <!-- Empty State -->
      <div v-else-if="noResults" class="text-center py-12 text-gray-500">
        لا توجد نتائج لـ "{{ debouncedQuery }}"
      </div>

      <!-- Initial State -->
      <div
        v-else-if="!searchQuery && !isLoading"
        class="text-center py-12 text-gray-500"
      >
        ابدأ الكتابة للبحث في الآيات
      </div>
    </div>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap");

  .font-tajawal {
    font-family: "Tajawal", sans-serif;
  }

  /* Increase Arabic text size */
  .text-xl {
    font-size: 1.4rem;
    line-height: 2;
  }

  /* RTL specific adjustments */
  [dir="rtl"] .group:hover button {
    transform: translateX(0);
  }

  [dir="rtl"] button {
    transform: translateX(-10px);
    transition: all 0.2s ease-in-out;
  }
</style>
