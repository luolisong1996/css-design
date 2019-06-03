import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lazypositioning from '@/components/Lazypositioning'
import HeadNavigation from '@/components/HeadNavigation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Lazypositioning',
      name: 'Lazypositioning',
      component: Lazypositioning
    },
    {
      path: '/HeadNavigation',
      name: 'HeadNavigation',
      component: HeadNavigation
    }
  ]
})
