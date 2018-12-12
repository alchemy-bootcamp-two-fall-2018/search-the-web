<template>
  <section class="articles">
    <h1>Articles</h1>
    <hr>
    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <h3>
      Searching for {{ search }}
    </h3>

    <div class="search-container">
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
import api from '../services/api';
import Article from './Article.vue';
import ArticleSearch from './ArticleSearch.vue';

export default {
    data() {
        const search = this.$route.query.search;
        return {
            articles: null,
            search: search ? decodeURIComponent(search) : '',
        };
    },
    components: {
        Article,
        ArticleSearch
    },
    created() {
        this.searchArticles();
        console.log('BANANAS');
    },
    watch: {
        $route(newRoute, oldRoute) {
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            console.log('zxc');
            if(newSearch === oldSearch) return;
            this.search = decodeURIComponent(newSearch);
            this.searchArticles(this.search);
        }
    },
    methods: {
        handleSearch(search) {
            console.log('something', this.search);
            this.search = search || '';
            this.searchArticles();
        },
        searchArticles() {
            console.log('banana', this.search);
            if(!this.search) return;
            api.getArticles(this.search)
                .then(response => {
                    this.articles = response.articles;
                });
        }
    }
};
</script>
<style>

</style>
