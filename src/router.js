import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Keyword from './components/keyword/Keyword';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/keyword', component: Keyword }
  ]
});