<template>
  <section class="newsstories">
    <h2>News Stories</h2>
     <NewsSearch :onSearch="handleSearch" :search="search"/>
     <Loader :loading="loading"/>   
     <pre v-show="error" class="error"> {{error}} </pre>
     <div class="search-container">
      <ul v-if="newsstories">
        <NewsStory v-for="(newsstory, i) in newsstories"
          :key="i"
          :newsstory="newsstory"
        />
      </ul>
     </div>
   </section>
</template>
<script>
import api from '../../services/api';
import NewsStory from './NewsStory';
import NewsSearch from './NewsSearch';
import Loader from './Loader';

export default {
    data() {
        let search = this.$route.query.search;
        return {
            newsstories: null,
            loading: false,
            error: null,
            search: search ? decodeURIComponent(search) : ''
        };
    },
    components: {
        NewsStory,
        NewsSearch,
        Loader  
    },
    created() {
        this.searchNewsStories();
    },
    watch: {
        $route(newRoute, oldRoute) {
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            if(newSearch === oldSearch) return;
            this.handleSearch(newSearch);
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchNewsStories();
        },
        searchNewsStories() {
            this.loading = true;
            this.error = null;

            api.getNews(this.search)
                .then(response => {
                    this.newsstories = response.articles;
                    this.loading = false;
                })
                .catch(err => {
                    this.error = err.message;
                    this.newsstories = null;
                    this.loading = false;
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