<template>
<div>
    <h3>Welcome to the Movie Search Component</h3>
    <form @submit.prevent="handleSubmit">
    <input v-model="keyword">
    <button>Search Movies</button>
</form>
</div>
</template>

<script>
export default {
  props: {
    search: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.search || ''
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style>

</style>
