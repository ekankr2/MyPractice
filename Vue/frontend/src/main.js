import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import GlobalComponent from './components/global-component'

Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
