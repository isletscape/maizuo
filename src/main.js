import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Icon } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.mount('#app')
