<template>
    <section class="news">
        NEWS
        <!-- {{news}} -->
        <div>
            <NewsSearch
                :onSearch="handleSearch"
                :q="q"/>
        </div>
        <div>
            <ul v-if="news">
                <NewsItem v-for="(newsItem, i) in news"
                :key="i"
                :newsItem="newsItem"
                />
            </ul>
        </div>
        
    </section>
</template>

<script>
import api from '../sources/api';
import NewsItem from './NewsItem';
import NewsSearch from './NewsSearch';

export default {
    data() {
        let q = this.$route.query.q;
        return {
            news: null,
            // search: decodeURIComponent(this.$route.query.search)
            q: q ? decodeURIComponent(q) : '',
        };
    },
    components: {
        NewsItem,
        NewsSearch
    },
    created() {
        this.searchNews();
    },
    watch: {
        $route(newRoute, oldRoute){
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            if(newSearch === oldSearch) return;
            this.q = decodeURIComponent(newSearch);
            this.searchNews();
        }
    },
    methods: {
        handleSearch(q) {
            this.q = q || '';
            this.searchNews();
        },
        // recordPage() {
        //     this.$router.push ({
        //         query: {
        //             search: encodeURIComponent(this.search)
        //         }
        //     });
        // },
        searchNews() {
            if(!this.q) return;
            
            api.getNews(this.q)
                .then(response => {
                    this.news = response.articles;
                });
        },
    }
  
};
</script>

<style>

</style>
