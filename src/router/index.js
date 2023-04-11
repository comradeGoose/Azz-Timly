import { createRouter, createWebHistory } from 'vue-router'
import CallList from '../views/CallListView.vue'
import SettingsView from '../views/SettingsView.vue'
import EventLogView from '../views/EventLogView.vue'
import UserSessions from '../views/UserSessionsView.vue'
import Users from '../views/UsersView.vue'
import EditAccount from '../views/EditAccountView.vue'

// localStorage.setItem('token','0, 1, 2, . . .')
// localStorage.getItem('token')

// localStorage.setItem('admin','1')
// localStorage.getItem('admin')

// 'page': ['0', '1', '2', '3']
// sessionStorage.setItem('page','0')
// sessionStorage.getItem('admin')

localStorage.setItem('azz_id', 'g1o2o3s4e5')
localStorage.setItem('azz_username', 'goose')
localStorage.setItem('azz_token', '1g2o3o4s5e')

const routes = [
  {
    path: '/call-list',
    name: 'call-list',
    component: CallList
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/event-log',
    name: 'event-log',
    component: EventLogView
  },
  {
    path: '/user-sessions',
    name: 'user-sessions',
    component: UserSessions
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/edit-account',
    name: 'edit-account',
    component: EditAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
