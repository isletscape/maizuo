import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Home/Movie/Movie.vue'
import Cinema from '@/views/Home/Cinema/Cinema.vue'
import Citys from '@/views/Citys/Citys.vue'
import Home from '@/views/Home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/movie',
    children: [
      {
        path: '/movie',
        name: 'movie',
        component: Movie,
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
    path: '/citys',
    name: 'citys',
    component: Citys,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
