<template>
  <section class="newsstories">
    <h2>News Stories</h2>
     <NewsStoriesSearch :onSearch="handleSearch" :search="search"/>
    
     <div class="search-container">
      <ul v-if="newsstories">
        <NewsStories v-for="(newsstory, i) in newsstories"
          :key="i"
          :newsstory="newsstory"
        />
      </ul>
     </div>
   </section>
</template>
<script>
import api from '../../services/api';
// import NewsStoriesSearch from './NewsStoriesSearch';

export default {
    data() {
        return {
            newsstories: null,
            search: decodeURIComponent(this.$route.query.search),
        };
    },
    components: {
        // NewsStoriesSearch,
    },
    created() {
        this.searchNewsStories();
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchNewsStories();
        },
        searchNewsStories() {
            api.getNews(this.search)
                .then(response => {
                    this.newsstories = response.results;
                });
        }
    }
};
</script>
 <style>
 .error {
  color: red;
}
 .loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>