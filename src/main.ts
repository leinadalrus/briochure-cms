import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app.vue'
import router from '../pages/router'

// VueVideoPlayer
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

import 'src/assets/style.css'

const app = createSSRApp(App)

app.use(createPinia())
app.use(router)

// VueVideoPlayer
app.use(VueVideoPlayer)

app.mount('#app')
