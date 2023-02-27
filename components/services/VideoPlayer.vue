<script lang="ts">
  // Default theme. ~960B
  import '@vime/core/themes/default.css'
  import { Player, Video, DefaultUi, DefaultSettings } from '@vime/vue-next'

  export default {
    components: {
      Player,
      Video,
      DefaultUi,
      DefaultSettings,
    },
  }
</script>

<template>
  <Player controls>

    <!-- Provider component is placed here. -->
    <video crossorigin="" poster="https://media.vimejs.com/poster.png">
      <!-- These are passed directly to the underlying HTML5 `<video>` element. -->
      <!-- Why `data-src`? Lazy loading, you can always use `src` if you prefer.  -->
      <source data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
      <track
        default
        kind="subtitles"
        src="https://media.vimejs.com/subs/english.vtt"
        srclang="en"
        label="English"
      />
    </video>

    <DefaultUi>
      <!-- UI components are placed here. -->
      <DefaultSettings pin="bottomRight">
        <!-- We can extend the settings with new options here. -->
      </DefaultSettings>
    </DefaultUi>
  </Player>
</template>
