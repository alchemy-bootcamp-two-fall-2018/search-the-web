
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Books from './components/Books.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/books', component: Books },
        { path: '*', redirect: '/' }
    ]
});