import { createApp } from 'vue'
import store from '@/store/'
import { Icon, List, NavBar, Popup } from 'vant'
// import 'default-passive-events' //解决控制台不停报错的问题
import 'vant/lib/index.css'
import App from './App.vue'
import '@/rem.js'
import router from './router'

createApp(App)
  .use(Icon)
  .use(List)
  .use(NavBar)
  .use(Popup)
  .use(store)
  .use(router)
  .mount('#app')
