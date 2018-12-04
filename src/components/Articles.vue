<template>
    <section class="articles">
        <h2>Articles</h2>

        <ArticlesSearch :onSearch="handleSearch" :search="search"/>



</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
      
    }
  }
};
</script>

<style>

</style>
