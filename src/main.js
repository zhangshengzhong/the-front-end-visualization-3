import Echarts from 'echarts'
import 'normalize.css/normalize.css'
import Vue from 'vue'
import VueEcharts from 'vue-echarts'
import App from './App.vue'
import './plugins/element.js'
import './plugins/vcharts'
import router from './router'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
