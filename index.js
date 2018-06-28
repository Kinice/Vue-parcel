import Vue from 'vue'
import Router from 'vue-router'
import App from './src/app.vue'

import Hello from './src/pages/hello.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});