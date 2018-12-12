// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './util/axios'
import store from './store'
import toastPlugin from './components/toast' // toast使用插件的形式
import AliAlert from './components/alert' // alert使用挂载方法的形式  参数必须传

Vue.prototype.$axios = Api
Vue.config.productionTip = false

Vue.use(toastPlugin)
Vue.prototype.$alert = AliAlert
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
