import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/'
import { Icon, List, NavBar, Popup } from 'vant'
import 'default-passive-events' //解决控制台不停报错的问题
import 'vant/lib/index.css'
import '@/rem.js'

createApp(App)
  .use(store)
  .use(router)
  .use(Icon)
  .use(List)
  .use(NavBar)
  .use(Popup)
  .mount('#app')
