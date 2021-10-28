import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '../views/Movie/Movie.vue'
import Cinema from '@/views/Cinema/Cinema.vue'

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema,
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Mine/Mine.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
