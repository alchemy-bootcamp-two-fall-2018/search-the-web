<template>
    <section class="news">
        NEWS
        <!-- {{news}} -->
        <div>
            <NewsSearch
                :onSearch="handleSearch"
                :search="search"/>
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
        // const search = this.$route.query.search;
        return {
            news: null,
            search: decodeURIComponent(this.$route.query.search)
            // search: search ? decodeURIComponent(search) : '',
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

            this.search = decodeURIComponent(newSearch);
            this.searchNews();
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchNews();
        },
        recordPage() {
            this.$router.push ({
                query: {
                    search: encodeURIComponent(this.search)
                }
            });
        },
        searchNews() {
            api.getNews(this.search)
                .then(response => {
                    this.news = response.articles;
                });
        },
    }
  
};
</script>

<style>

</style>
