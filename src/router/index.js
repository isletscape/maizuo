import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Movie/Movie.vue'
import Cinemas from '@/views/Cinema/Cinemas.vue'
import City from '@/views/City/City.vue'
import Home from '@/views/Home.vue'
import Mine from '@/views/Mine/Mine.vue'

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
        path: '/cinemas',
        name: 'cinemas',
        component: Cinemas,
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine,
      },
    ],
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "detail" */ '@/views/Movie/Detail.vue'),
  },
  {
    path: '/cinema/:id',
    name: 'cinema',
    component: () =>
      import(/* webpackChunkName: "cinema" */ '@/views/Cinema/Cinema.vue'),
  },
  {
    path: '/schedule/:id',
    name: 'schedule',
    component: () =>
      import(/* webpackChunkName: "schedule" */ '@/views/Cinema/Schedule.vue'),
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () =>
      import(/* webpackChunkName: "tickets" */ '@/views/Movie/Tickets.vue'),
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
