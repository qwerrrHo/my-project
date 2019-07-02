// 引入 vue
import Vue from 'vue'
// 引入 axios
import axios from 'axios'

// 创建一个插件对象
var myaxios = {}
//添加 install 方法
myaxios.install = function(Vue){
    // 给Vue实例对象添加方法
    Vue.prototype.$http = axios 
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
}

// 暴露 myaxios
export default myaxios