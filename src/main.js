import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import Axios from './config/Axios'
import { routes } from './routes'

Vue.prototype.$http = Axios

Vue.use(VueLazyload)

Vue.use(Router)
const router = new Router({ routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
