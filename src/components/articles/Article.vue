<template>
  <li>
    <!-- <RouterLink :to="`/articles/${article.author}`" >
      {{articles.author}} wrote an article.
    </RouterLink> -->
  </li>
</template>

<script>

export default {
  props: {
    article: Object
  }
};

</script>

<style>

</style>