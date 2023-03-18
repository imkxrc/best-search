import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const searchList = () => import('@/components/search-list.vue')
const searchListChild = () => import('@/components/search-list-child.vue')
const SearchIndex = () => import('@/components/searchIndex')

const routes = [{
    path: '/',
    component: SearchIndex
},
{
    path: '/search-list/:searchKey',
    name:'searchList',
    params:{id:34243,name:'searchKey'},
    component: searchList,
    meta:{

    },
    children:[{
            path: 'search-list-child',
            name:'searchListChild',
            params:{id:34243,name:'searchKey'},
            component: searchListChild,
            meta:{
                titile:'我是子路由'
            },
    }]
},

]

const router = new VueRouter({
    //mode: 'history', //可写可不写
    base: process.env.BASE_URL,
    routes
})


export default router