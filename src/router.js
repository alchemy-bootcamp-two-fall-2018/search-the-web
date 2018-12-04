import VueRouter from 'vue-router'; 
import Home from './components/Home.vue'; 
import Species from './components/Species/Species.vue'; 

export default new VueRouter ({
  routes: [
    { path: '/', component: Home },
    { path: '/species', component: Species },
    { path: '*', redirect: '/' }
  ]
});