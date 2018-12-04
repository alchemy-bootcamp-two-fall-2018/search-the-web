import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import People from './components/movies/Movies.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/movies', component: People },
    { path: '*', redirect: '/' }
  ]
});