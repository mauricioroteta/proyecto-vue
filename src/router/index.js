import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'formLogin',
    component: () => import(/* webpackChunkName: "home" */ '../views/FormLoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoLstView.vue')
  },
  {
    path: '/productoView',
    name: 'productoView',
    component: () => import(/* webpackChunkName: "Productos" */ '../views/ProductoView.vue')
  },
  {
    path: '/usrAltaView',
    name: 'usrAltaView',
    component: () => import(/* webpackChunkName: "UsrAlta" */ '../views/UsrAltaView.vue')
  },
  {
    path: '/carritoLstView',
    name: 'carritoLstView',
    component: () => import(/* webpackChunkName: "CarritoLstView" */ '../views/CarritoLstView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router