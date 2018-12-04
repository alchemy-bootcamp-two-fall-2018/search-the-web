import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import News from './components/News.vue';





export default new VueRouter({

    routes: [
        { path: '/', component: Home },
        { path: '/news', component: News },
        { path: '*', redirect: '/' }
    ]
});