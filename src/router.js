import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Arts from './components/news-search/Arts';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/arts', component: Arts }
  ]
});