// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)
const router = new VueRouter({
	routes:routes
})
/* eslint-disable no-new */
new Vue({
	router
}).$mount('#app')
