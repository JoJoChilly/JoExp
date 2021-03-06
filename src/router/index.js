import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
