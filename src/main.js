import Vue from 'vue'
import App from './App.vue'
import verify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import Loadong from "./loading/loading";
import store from './store/'
import rq from "./axios/api.js";
import 'echarts'
import ECharts from 'vue-echarts'
require('./mock') // 引入mock数据，不需要时，则注释掉
Vue.component('VueEcharts', ECharts)
Vue.use(Loadong);
Vue.prototype.$server = rq

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true
  },
})
import router from '@/router' //添加部分

Vue.config.productionTip = false

new Vue({
  vuetify: verify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')