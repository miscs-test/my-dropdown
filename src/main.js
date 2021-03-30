import Vue from 'vue'
import App from './App.vue'
import MyDropdown from './components'

Vue.config.productionTip = false

Vue.use(MyDropdown);

new Vue({
  render: h => h(App),
}).$mount('#app')
