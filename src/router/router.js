import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/index.vue'
import Login from '../components/login/login.vue'
import NewTicket from '../components/new_ticket/new_ticket.vue'
import Support from '../components/support/support.vue'
import Trash from '../components/trash/trash.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path: '/login', component: Login},
    {path: '/', component: Index},
    {path: '/new_ticket', component: NewTicket},
    {path: '/support', component: Support},
    {path: '/trash', component: Trash}
  ]
})

export default router