import Vue from 'vue'
import App from './App.vue'
import verify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'
import Loadong from "./loading/loading";
import 'echarts'
import ECharts from 'vue-echarts'
Vue.component('VueEcharts', ECharts)
Vue.use(Loadong);

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