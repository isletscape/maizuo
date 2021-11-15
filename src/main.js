import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/'
import 'default-passive-events' //解决控制台不停报错的问题
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
  Sticky,
} from 'vant'
import 'vant/lib/index.css'
import '@/utils/rem.js'

const app = createApp(App)

app
  .use(store)
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
  .use(Sticky)
  .mount('#app')
