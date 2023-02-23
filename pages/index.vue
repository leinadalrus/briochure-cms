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

  const user = useSupabaseUser()
  const { auth } = useSupabaseAuthClient()
  watchEffect(() => {
    if (user.value) navigateTo('/dashboard')
  })
</script>

<template>
  <HeaderMeta />
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
        Sign in to your account
      </h2>
      <LoginCard>
        <UButton
          class="mt-3"
          icon="mdi:github"
          block
          label="Github"
          variant="black"
          @click="auth.signInWithOAuth({ provider: 'github' })"
        />
      </LoginCard>
    </div>
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
