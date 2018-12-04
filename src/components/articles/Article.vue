<template>
  <li>
    
   {{article.title}} by {{article.author}}
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
