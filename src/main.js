// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './util/axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import toastPlugin from './components/toast' // toast使用插件的形式
Vue.prototype.$axios = Api
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(toastPlugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
