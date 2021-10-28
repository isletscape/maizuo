import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Icon } from 'vant'
import 'vant/lib/index.css'

createApp(App).use(router).use(Tabbar).use(TabbarItem).use(Icon).mount('#app')
