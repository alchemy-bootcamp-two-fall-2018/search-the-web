import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import NewsArticles from './components/news/NewsArticles.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: NewsArticles },
    { path: '*', redirect: '/' }
  ]
});