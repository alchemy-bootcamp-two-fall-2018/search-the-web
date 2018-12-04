<template>
  <section class="articles">
    <h1>Articles</h1>
    <hr>
    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <h3>
      Searching for {{ search }}
    </h3>
     
    <pre v-show="error" class="error">
      {{error}}
    </pre>

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
import api from '..api';
import Article from './Article';
import ArticleSearch from './SearchApp';
export default {
    data() {
        let search = this.$route.query.search;
        return {
            articles: null,
            error: null,
            search: search ? decodeURIComponent(search) : '',
            total: 0,
            perPage: 10
        };
    },
    components: {
        Article,
        ArticleSearch,
    },
    created() {
        this.searchArticles();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.perPage);
        }
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
            this.error = null;
            api.getArticles(this.search)
                .then(response => {
                    console.log(response);
                    this.articles = response.articles;
                    this.total = response.count;
                })
                .catch(err => {
                    this.error = err.message;
                    this.articles = null;
                });
        }
    }
};
</script>