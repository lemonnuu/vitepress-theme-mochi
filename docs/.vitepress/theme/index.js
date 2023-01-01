import DefaultTheme from 'vitepress/theme'
import MochiLayout from './components/MochiLayout.vue'
import HomeView from './components/HomeView.vue'
import './css/index.css'
import './assets/fonts/source-code-pro/source-code-pro.css'
import './assets/fonts/source-code-pro/source-code-variable.css'
import './css/custom.css'
import './css/tailwind.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    ctx.app.component('HomeView', HomeView)
    DefaultTheme.enhanceApp(ctx)
  },
  Layout: MochiLayout,
}
