<template>
  <section>
  <form @submit.prevent="handleSubmit">
    <input v-model="keyword">
    <button>Go</button>
  </form>
  </section>
</template>

<script>
export default {
  props: {
    q: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.q || ''
    };
  },
  watch: {
    q(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          q: encodeURIComponent(this.keyword)
        }
      });
    }
  },
  
};

</script>


<style>

</style>