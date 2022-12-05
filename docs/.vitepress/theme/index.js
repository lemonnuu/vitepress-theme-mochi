import DefaultTheme from 'vitepress/theme'
import MochiLayout from './components/MochiLayout.vue'
import './css/index.css'
import './css/custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)
  },
  Layout: MochiLayout,
}
