<template>
   <section>
       <h2>NEWS</h2>
       <NewsSearch :onSearch="handleSearch" />

      <Loading :loading="loading" />

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
import api from '../services/api';
import NewsSearch from './NewsSearch';
import NewsItem from './NewsItem';
import Loading from './Loading';

export default {
  data() {
    return {
      news: null,
      loading: false,
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  components: {
    NewsItem,
    NewsSearch,
    Loading
  },
  created() {
    this.searchNews();
  },
  watch: {
    $route(newRoute, oldRoute) {
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
    searchNews() {
      this.loading = true;
      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
          this.loading = false;
        }).catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
  }

};
</script>

<style>
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>