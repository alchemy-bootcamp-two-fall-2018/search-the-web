import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';
import Articles from './src/components/Articles.vue';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home }, 
        { path: '/articles', component: Articles }
    
    ]
});