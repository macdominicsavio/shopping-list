import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import underscore from 'vue-underscore'


Vue.use(VueResource)

Vue.config.productionTip = false
Vue.use(underscore);

new Vue({
  el: '#app',
  render: h => h(App)
})
