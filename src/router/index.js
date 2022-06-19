import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Users from '../views/Users.vue'
import Roles from '../views/Roles.vue'
import Courses from '../views/Courses.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/applicants', name: 'Admin', component: Admin },
  { path: '/users', name: 'Users', component: Users },
  { path: '/roles', name: 'Roles', component: Roles },
  { path: '/courses', name: 'Courses', component: Courses },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
