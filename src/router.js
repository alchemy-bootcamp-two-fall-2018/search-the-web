import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Items from './components/item/Item.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/items', component: Items },
    { path: '*', redirect: '/' }
  ]
});