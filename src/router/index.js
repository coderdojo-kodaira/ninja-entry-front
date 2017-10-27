import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Entry from '@/components/Entry'
import VueMaterial from 'vue-material'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/entry/:name',
      name: 'entry',
      component: Entry
    }
  ]
})
