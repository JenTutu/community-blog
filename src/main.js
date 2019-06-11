import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

const authData = localStorage.getItem('auth'); // this is cached here; it's only run once, on page load.

new Vue({
  router,
  data: { // this is global data that is shared throughout app
    auth: authData ? JSON.parse(authData) : {} // this is so the auth object persists even after refresh
  },
  render: h => h(App),
}).$mount('#app')
