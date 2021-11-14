import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Movie/Movie.vue'
import Cinemas from '@/views/Cinema/Cinemas.vue'
import City from '@/views/City/City.vue'
import Mine from '@/views/Mine/Mine.vue'

const routes = [
  {
    path: '/',
    redirect: '/movie',
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
    props: true,
    meta: {
      showNav: true,
    },
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: Cinemas,
    meta: {
      showNav: true,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      showNav: true,
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: () => import('@/views/Movie/Detail.vue'),
  },
  {
    path: '/cinema/:cinemaId',
    name: 'cinema',
    component: () => import('@/views/Cinema/Cinema.vue'),
    children: [
      {
        path: 'movies/:movieId',
        component: () => import('@/views/Cinema/Halls.vue'),
      },
    ],
  },
  {
    path: '/schedule/:id',
    name: 'schedule',
    component: () => import('@/views/Cinema/Schedule.vue'),
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import('@/views/Movie/Tickets.vue'),
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
