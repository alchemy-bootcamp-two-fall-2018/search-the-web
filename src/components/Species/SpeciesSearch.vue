<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="keyword"> 
    <button> Go </button>
  </form>
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
