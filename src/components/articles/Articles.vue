<template>
  <section>
    <h2>Search Articles</h2>
    <ArticleSearch />
    <Article />
  </section>
</template>

<script>
// import api from '../../services/api';
import Article from './Article';
import ArticleSearch from './ArticleSearch';

export default {
  components: {
    Article,
    ArticleSearch,
  }
};
</script>

<style>

</style>