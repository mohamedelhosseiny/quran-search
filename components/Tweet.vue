<script setup lang="ts">
import { marked } from 'marked';

const props = defineProps<{
  tweet: string;
}>();

// Configure marked to parse line breaks
marked.setOptions({
  breaks: true,
});

// Parse markdown to HTML
const parsedContent = computed(() => marked(props.tweet));
</script>

<template>
  <div class="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
    <div class="flex space-x-3">
      <!-- Author Avatar -->
      <div class="flex-shrink-0">
        <div class="w-12 h-12 rounded-full bg-blue-500"></div>
      </div>

      <!-- Tweet Content -->
      <div class="flex-1 min-w-0">
        <!-- Author Info -->
        <div class="flex items-center space-x-1">
          <span class="font-bold text-gray-900">John Doe</span>
          <span class="text-gray-500">@johndoe</span>
          <span class="text-gray-500">·</span>
          <span class="text-gray-500">Jan 10</span>
        </div>

        <!-- Tweet Text -->
        <div 
          class="mt-1 text-gray-900 prose prose-sm max-w-none"
          v-html="parsedContent"
        />
      </div>
    </div>
  </div>
</template>

<style>
.prose :last-child {
  margin-bottom: 0;
}
.prose :first-child {
  margin-top: 0;
}

/* Additional tweet-specific markdown styles */
.prose p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.prose strong {
  color: inherit;
  font-weight: 600;
}

.prose a {
  color: rgb(29, 155, 240);
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}
</style>
