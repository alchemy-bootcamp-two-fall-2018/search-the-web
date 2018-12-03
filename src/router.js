import VueRouter from 'vue-router';
import Home from './components/home/Home';
import KPM from './components/kpms/KPM';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/budget-kpm', component: KPM },
    { path: '*', redirect: '/' }
  ]
});