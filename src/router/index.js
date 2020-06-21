import Vue from 'vue'
import Router from 'vue-router'
import profilePage from '@/components/profile'
import signUp from '@/components/views/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profilePage',
      component: profilePage
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: signUp
    }
  ]
})
