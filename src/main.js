import Echarts from 'echarts'
import 'normalize.css/normalize.css'
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false
Vue.prototyoe.$echarts = Echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
