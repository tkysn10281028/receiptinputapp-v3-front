import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import TestView from "../views/TestView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },

]

const router = new VueRouter({
  routes
})

export default router
