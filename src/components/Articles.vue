<template>
  <section class="articles">
    <h2>Articles</h2>

    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <p>
      Searching for {{ search }} - found {{total}} -
    </p>
     
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
import api from './services/api';
import Article from './Article';
import ArticleSearch from './ArticleSearch';

export default {
    data() {
        return {
            articles: null,
            error: null,
            search: decodeURIComponent(this.$route.query.search),
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
