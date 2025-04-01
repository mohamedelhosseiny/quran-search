<script setup lang="ts">
  import { useClipboard } from "@vueuse/core";

  interface QuranVerse {
    id: number;
    text: string;
    surah_number: number;
    verse_number: number;
    verse: string;
    translation_eng?: string;
  }

  const props = defineProps<{
    verse: QuranVerse;
  }>();

  const { copy, copied } = useClipboard();

  const copyVerse = async () => {
    await copy(props.verse.verse);
  };

  const modifiedVerse = computed(() => {
    return props.verse.verse.replace("۞", "");
  });
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md relative group"
  >
    <div class="flex justify-between items-start mb-4">
      <span class="text-xl text-gray-900">
        {{ modifiedVerse }}
      </span>
      <button
        @click="copyVerse"
        class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-600 flex items-center gap-2"
      >
        <span>{{ copied ? "تم النسخ!" : "نسخ" }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
    <p
      v-if="verse.translation_eng"
      class="text-gray-600 text-base mt-4"
      dir="ltr"
    >
      {{ verse.translation_eng }}
    </p>
  </div>
</template>
