import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '@/views/Movie/Movie.vue'
import Cinemas from '@/views/Cinema/Cinemas.vue'
import City from '@/views/City/City.vue'
import Mine from '@/views/Mine/Mine.vue'
import store from '@/store/'

/**
 * requireAuth：需要登陆
 * showNav：显示底部标签栏
 */

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
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: () => import('@/views/Movie/Detail.vue'),
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
    path: '/tickets',
    name: 'tickets',
    component: () => import('@/views/Movie/Tickets.vue'),
  },
  {
    path: '/schedule/:id',
    name: 'schedule',
    component: () => import('@/views/Cinema/Schedule.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/Cinema/Order.vue'),
    meta: {
      requireAuth: true,
      needToast: true,
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
    path: '/login',
    name: 'login',
    component: () => import('@/views/Mine/Login.vue'),
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: () => import('@/views/Mine/Coupons.vue'),
    meta: {
      requireAuth: true,
    },
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.userInfo) {
    router.push('/login')
  } else {
    next()
  }
})

export default router
