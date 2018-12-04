import VueRouter from 'vue-router';
import Home from './components/home/Home';
import KPMS from './components/kpms/KPMS';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/budget-kpm', component: KPMS },
    { path: '*', redirect: '/' }
  ]
});