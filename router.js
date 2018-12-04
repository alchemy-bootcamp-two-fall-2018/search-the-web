import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';
import SearchApp from './src/components/ArticleSearch.vue';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home }, 
        { path: '/SearchApp', component: SearchApp }
    
    ]
});