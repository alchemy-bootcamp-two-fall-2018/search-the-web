
import VueRouter from 'vue-router';
import Home from './components/Home';
import News from './components/News';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/news', component: News },

        { path: '*', redirect: '/' }
    ]
});