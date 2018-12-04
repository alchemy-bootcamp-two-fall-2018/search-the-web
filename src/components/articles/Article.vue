<template>
  <li>
      <p class="title">{{article.title}}</p>
      <p class="author"> by {{article.author}}</p>
      <p class="source"> {{article.source.name}}</p>
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
        margin-bottom: 20px;
    }
    .title {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0;
        padding: 0;
    }
    .author {
        font-size: .9em;
        font-weight: 500;
        margin: 0;
        padding: 0;
    }
    .source {
        font-size: .7em;
        margin: 0;
        padding: 0;
    }
</style>