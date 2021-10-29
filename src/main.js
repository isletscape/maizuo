import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Card,
  List,
} from 'vant'
import 'vant/lib/index.css'
import '@/rem/rem.js'

const app = createApp(App)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Card)
app.use(List)
app.mount('#app')
