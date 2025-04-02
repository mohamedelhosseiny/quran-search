<template>
  <NuxtLayout>
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { Analytics } from "@vercel/analytics/nuxt";

  // In you app.vue file for example when you user has given consent:

  const { initialize } = useHotjar();

  function onConsent() {
    initialize();
  }
</script>
