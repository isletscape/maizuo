import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Home/Movie/Movie.vue'
import Cinema from '@/views/Home/Cinema/Cinema.vue'
import City from '@/views/City/City.vue'
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
    path: '/city',
    name: 'city',
    component: City,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
