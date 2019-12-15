import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import Axios from './config/Axios'

Vue.prototype.$http = Axios
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
