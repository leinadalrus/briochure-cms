<script setup lang="ts">
  const cardImage = await fetch('api/data/url').then((response) => {
    return response.text()
  })
  const cardTitle = 'Title of Card'
  const cardFlavour = `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`
</script>

<template>
  <article id="card-article">
    <img v-bind:src="cardImage" alt="" id="article-card-image" />
    <div id="article-card-header">
      <h1>{{ cardTitle }}</h1>
    </div>
    <span id="article-card-body">
      <p>
        <i>{{ cardFlavour }}</i>
      </p>
    </span>
  </article>
</template>

<style lang="sass">
  #article-card
    width: 33%
    height: 66%
    margin: 4px
    padding: 4px

  #article-card-image
    width: 33% / 11%
    height: 66% / 9%
    margin: auto
    padding: auto
</style>
