import Vue from 'vue'
import App from './App.vue'

import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

const authData = localStorage.getItem('auth'); // this is cached here; it's only run once, on page load.

new Vue({
  router,
  data: { // this is global data that is shared throughout app
    auth: authData ? JSON.parse(authData) : {} // this is so the auth object persists even after refresh
  },
  render: h => h(App),
}).$mount('#app')
