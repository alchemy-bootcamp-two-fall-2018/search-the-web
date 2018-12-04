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
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          q: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};

</script>


<style>

</style>