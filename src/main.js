import Vue from 'vue'
//import App from './App.vue'
//import Demo from './Vadd.vue'
//import Vadd from './Vadd.vue'
//import Demo from './VaddObj.vue'
import Demo from './Vcount.vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
// new Vue({
//   el: '#app',
//   render: h => h(App9),
// })