<template>
    <section>
        <h2>Articles
            {{articles}}
            <SearchApp :onSearch="handleSearch" :search="search"/>
        </h2>

        <div>
            <ul v-if="articles">
                <Article v-for="(article, i) in articles"
                    :key="i"
                    :article="article"
                />
            </ul>
        </div>
    </section>
</template>
<script>
import Article from './Article.vue';
import api from '../services/api.js';
import SearchApp from './SearchApp.vue';
export default {
    data() {
        return {
            articles: null,
            search: decodeURIComponent(this.$route.query.search)        
        };
    }, 
    components: {
        Article, 
        SearchApp
    }, 
    created() {
        this.searchArticles();
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
        },
        searchArticles() {
            api.getArticles(this.search)
                .then(response => {
                    this.articles = response.articles;
                });
        },
    }
};
</script>

<style>

</style>
