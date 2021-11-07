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
import '@/utils/rem/rem.js'

const app = createApp(App)

app.use(Store)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.use(NavBar)
app.use(PullRefresh)
app.use(IndexBar)
app.use(IndexAnchor)
app.use(Search)
app.use(Popup)
app.mount('#app')
