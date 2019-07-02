// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui 
import ElementUI from 'element-ui'
// 引入element-ui 样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 引入myaxios插件
import myaxios from './assets/js/myaxios.js'

// 引入全局样式
import '../src/assets/css/index.css'


Vue.config.productionTip = false

// 使用element-ui
Vue.use(ElementUI)
// 使用myaxios
Vue.use(myaxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
