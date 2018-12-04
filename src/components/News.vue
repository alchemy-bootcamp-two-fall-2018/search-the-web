<template>
    <section class="news">
        <h2>News</h2>
        {{news}}
    </section>
</template>

<script>
import api from '../services/api';
import Article from './Article';


export default {
    data() {
        return {
            news: null
        };
    },

    components: {
        Article
    },

    created() {
        this.searchNews();
    },

    methods: {
        searchNews() {
            api.getNews() 
                .then(response => {
                    this.news = response.articles;
                });

        }
    }
};

</script>

<style>

</style>
