<script setup lang="ts">
  import HeaderMeta from '@/components/HeaderMeta.vue'

  // VueVideoPlayer
  // import VueVideoPlayer from '@videojs-player/vue'
  // import 'video.js/dist/video-js.css'

  // const app = createApp(App)
  // VueVideoPlayer
  // app.use(VueVideoPlayer)
  // app.mount('#app')

  useServerSeoMeta({
    title: 'Briochure CMS (Web-app)',
    ogTitle: 'Briochure',
    description:
      'Your local input - Localization and Storyboarding - Briochure CMS',
    ogDescription: 'Your local input - Localization and Storyboarding',
  })
</script>

<template>
  <HeaderMeta />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
