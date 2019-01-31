import Vue from 'vue'
import App from './App'
import store from './store.js'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
