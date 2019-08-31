import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/index.vue'
import Login from '../components/login/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path: '/login', component: Login},
    {path: '/', component: Index}
  ]
})

export default router