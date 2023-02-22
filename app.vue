<script setup lang="ts">
  import { title } from 'process'

  useServerSeoMeta({
    title: 'Briochure CMS (Web-app)',
    ogTitle: 'Briochure',
    description:
      'Your local input - Localization and Storyboarding - Briochure CMS',
    ogDescription: 'Your local input - Localization and Storyboarding',
  })
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Briochure</NuxtLink></li>
        <li><NuxtLink to="/player">Int'lize</NuxtLink></li>
        <li><NuxtLink to="/library">Library</NuxtLink></li>
        <li><NuxtLink to="/account">Account</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
