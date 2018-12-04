<template>
  <li>
    <RouterLink :to="`/articles/${articles.title}`">
    {{article.title}} by {{articles.author}}
    </RouterLink>
  </li>
</template>

<script>

export default {
  props: {
    person: Object
  }
};
</script>

<style>

</style>
