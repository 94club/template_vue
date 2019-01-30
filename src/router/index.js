import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/page/test'
import Page1 from '@/page/page1'
import Page2 from '@/page/page2'
import Page3 from '@/page/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/page1',
      component: Page1
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/page3',
      component: Page3
    }
  ]
})
