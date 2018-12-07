<template>
  <div v-show="loader">
    <h4>Loader...</h4>
  </div>
</template>

<script>
export default {
  props: {
    loader: Boolean
  }
};
</script>

<style>

</style>
