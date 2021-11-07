import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from '@/utils/store.js'
import 'default-passive-events'
import {
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  IndexBar,
  IndexAnchor,
  Search,
  NavBar,
  Popup,
} from 'vant'
import 'vant/lib/index.css'
import '@/utils/rem.js'

createApp(App)
  .use(Store)
  .use(router)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(List)
  .use(NavBar)
  .use(PullRefresh)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Search)
  .use(Popup)
  .mount('#app')
