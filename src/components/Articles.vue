<template>
  <section class="articles">
    <h1>Articles</h1>
    <hr>
    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <h3>
      Searching for {{ search }}
    </h3>
    <p>
        {{Article}}
    </p>
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
        let search = this.$route.query.search;
        return {
            articles: null,
            search: search ? decodeURIComponent(search) : '',
        };
    },
    components: {
        Article,
        ArticleSearch,
    },
    created() {
        this.searchArticles();
    },
    watch: {
        $route(newRoute, oldRoute) {
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            if(newSearch === oldSearch) return;
            this.search = decodeURIComponent(newSearch);
            this.handleSearch(this.search);
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchArticles();
        },
        searchArticles() {
            api.getArticles(this.search)
                .then(response => {
                    console.log(response);
                    this.articles = response.results;
                });
        }
    }
};
</script>
<style>

</style>
