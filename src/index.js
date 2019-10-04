import './styles/main.scss';
//import 'bootstrap';
import Vue from 'vue';
import App from './app/App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');
