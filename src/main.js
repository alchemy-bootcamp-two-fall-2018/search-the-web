import VueRouter from 'vue-router';
import Vue from 'vue';
import router from '../router.js';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
