import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Details from '@/components/Details.vue';
import LogManagement from '@/components/LogManagement.vue';
import SiteManagement from '@/components/SiteManagement.vue';
import Home from '@/components/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/resource/details',
      name: '设备详情',
      component: Details
    },
    {
      path: '/network/log-Management',
      name: '日志管理',
      component: LogManagement
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/resource/equipment/site',
      name: '站点管理',
      component: SiteManagement,
    }
  ]
})
