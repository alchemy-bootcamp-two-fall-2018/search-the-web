<template>
    <section>
        NEWS
        <!-- {{news}} -->
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

export default {
    data() {
        return {
            news: null
        };
    },
    components: {
        NewsItem
    },
    created() {
        this.searchNews();
    },
    methods: {
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
