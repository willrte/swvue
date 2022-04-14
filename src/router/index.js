import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personnages from "../views/Personnages";
import Perso from "../views/PersoSeul";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/personnages',
    name: 'Personnages',
    component: Personnages
  },
  {
    path: '/perso',
    name: 'Perso',
    component: Perso
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
