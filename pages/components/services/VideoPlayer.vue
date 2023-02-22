<script lang="ts">
  import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'

  import Caption from './Caption.vue'

  export default defineComponent({
    components: {
      VideoPlayer,
    },
  })
</script>

<!-- have database connection value of API URL here -->
<template>
  <main>
    <article>
      <ul role="list">
        <!-- Remove top/bottom padding when first/last child -->
        <li>
          <img src="@/assets/logo.svg" alt="" />
          <div>
            <p>
              {{ 'person.name' }}
            </p>
            <p>{{ 'person.email' }}</p>
          </div>
        </li>
      </ul>
    </article>
    <article>
      <video-player
        :children="[]"
        src="Videos"
        poster="Videos.value == 'poster'"
        controls
        :loop="false"
        :volume="0.5"
      >
        <template v-slot="{ player, state }">
          <div class="custom-player-controls">
            <button
              class="p-2 m-1"
              @click="state.playing ? player.pause() : player.play()"
            >
              {{ state.playing ? 'Pause' : 'Play' }}
            </button>
            <button @click="player.muted(!state.muted)">
              {{ state.muted ? 'UnMute' : 'Mute' }}
            </button>
          </div>
        </template>
      </video-player>
    </article>
  </main>
</template>
