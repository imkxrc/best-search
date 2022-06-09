import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const Index = () => import('@/components/HelloWorld')
const searchList = () => import('@/components/search-list.vue')
const SearchIndex = () => import('@/components/searchIndex')

const routes = [
    { path: '/', component: SearchIndex },
    { path: '/search/:searchKey', component: searchList },
 
]

const router = new VueRouter({
    mode: 'history',//可写可不写
    base: process.env.BASE_URL,
    routes
})


export default router