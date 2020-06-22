import Vue from 'vue'
import Router from 'vue-router'
import profilePage from '@/components/profile'
import signUp from '@/components/views/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/profilePage',
      name: 'profilePage',
      component: profilePage
    }
  ]
})
