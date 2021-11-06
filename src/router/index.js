import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Home/Movie/Movie.vue'
import Cinema from '@/views/Home/Cinema/Cinema.vue'
import City from '@/views/City/City.vue'
import Home from '@/views/Home/Home.vue'
import Detail from '@/views/Home/Movie/Detail.vue'
import Tickets from '@/views/Home/Movie/Tickets.vue'

const routes = [
  {
    path: '/',
    redirect: '/movie',
  },
  {
    component: Home,
    path: '/home',
    redirect: '/movie',
    children: [
      {
        path: '/movie',
        name: 'movie',
        component: Movie,
        props: true,
      },
      {
        path: '/cinema',
        name: 'cinema',
        component: Cinema,
      },
      {
        path: '/mine',
        name: 'mine',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Home/Mine/Mine.vue'),
      },
    ],
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/:id/tickets',
    name: 'tickets',
    component: Tickets,
  },
  {
    path: '/city',
    name: 'city',
    component: City,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //滚动行为
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
