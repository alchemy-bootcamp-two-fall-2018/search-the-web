<template>
  <li>
      <p><strong>{{article.author}}</strong></p>
      <p>{{article.title}}</p>
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
    li {
        list-style-type: none;
    }
</style>