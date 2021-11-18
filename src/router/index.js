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
    meta: {
      keepAlive: true,
    },
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
    props: true,
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
  scrollBehavior(to, from, savePosition) {
    // if (savePosition) {
    //   //解决页面从列表页跳转到详情页返回,初始在原来位置
    //   return savePosition
    // } else {
    //   //解决页面跳转后页面高度和前一个页面高度一样
    // return { x: 0, y: 0 }
    // }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.userInfo) {
    next({
      name: 'login',
      params: { fromPath: from.fullPath }, // 将原路由的path传递到登录页
    })
  } else {
    next()
  }
})

export default router
