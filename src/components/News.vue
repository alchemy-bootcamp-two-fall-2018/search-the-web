<template>
    <section>
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
        return {
            news: null,
            search: decodeURIComponent(this.$route.query.search)
        };
    },
    components: {
        NewsItem,
        NewsSearch
    },
    created() {
        this.searchNews();
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
        },
        searchNews() {
            api.getNews(this.search)
                .then(response => {
                    this.news = response.articles;
                    

                });
        }
    }
  
};
</script>

<style>

</style>
