import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import NewsStories from './components/newsstories/NewsStories.vue';
export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/newsstories', component: NewsStories },
        { path: '*', redirect: '/' }
    ]
}); 