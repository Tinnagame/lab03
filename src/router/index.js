import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import NewPage from '../views/NewPage.vue'
import StudentList from '../views/StudentList.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/newPage',
    name: 'NewPage',
    component: NewPage
  },
  {
    path: '/StudentList',
    name: 'StudentList',
    component: StudentList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
