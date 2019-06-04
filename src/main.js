//入口文件 
import Vue from 'vue'

//导入 Mui 的样式
import './lib/mui/css/mui.min.css'

//按需导入 mint-ui中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


//导入App组件
import app from './App.vue'
var vm = new Vue({
    el:"#app",
    render: h => h(app)
})