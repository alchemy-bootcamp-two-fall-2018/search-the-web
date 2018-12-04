<template>
   <section>
       <h2>NEWS</h2>
       <NewsSearch />
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
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
    //   this.search = decodeURIComponent(newSearch); 
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
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