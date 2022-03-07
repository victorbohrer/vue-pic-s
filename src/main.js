import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import './assets/tailwindcss.css';

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: h => h(App)
})