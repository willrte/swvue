import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Test2emepage from "../views/Test2emepage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test2emepage',
    name: 'Star Wars Machin',
    component: Test2emepage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
