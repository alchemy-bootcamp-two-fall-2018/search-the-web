import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import News from './components/news/News.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '*', redirect: '/' }
  ]
});