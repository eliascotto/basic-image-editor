import Vue from 'vue'
import App from './App.vue'
import browserDetect from "vue-browser-detect-plugin";

Vue.config.productionTip = false
Vue.use(browserDetect)

new Vue({
  render: h => h(App),
}).$mount('#app')
