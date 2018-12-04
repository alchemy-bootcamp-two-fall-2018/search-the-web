<template>
    <div>
        <h3>Article Search</h3>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="keyword">
            <button>Search</button>
        </form>
    </div>
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
