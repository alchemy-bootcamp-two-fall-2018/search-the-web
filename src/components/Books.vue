<template>
  <section class="books">
    <h2>Books</h2>

    <BookSearch :onSearch="handleSearch" :search="search"/>

    <p>
      Searching for &quot;{{ search }}&quot; - found {{total}} -
    </p>
     
    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="books">
        <Book v-for="(book, i) in books"
          :key="i"
          :book="book"
        />
      </ul>

    </div>

  </section>
</template>

<script>
import api from './services/api';
import Book from './Book';
import BookSearch from './BookSearch';

export default {
    data() {
        return {
            books: null,
            error: null,
            search: decodeURIComponent(this.$route.query.search),
            total: 0,
            perPage: 10
        };
    },
    components: {
        Book,
        BookSearch,
    },
    created() {
        this.searchBooks();
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
            this.searchBooks();
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchBooks();
        },
        searchBooks() {
            this.error = null;
            api.getBooks(this.search)
                .then(response => {
                    this.books = response.results;
                    this.total = response.count;
                })
                .catch(err => {
                    this.error = err.message;
                    this.books = null;
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
