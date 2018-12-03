<template>
    <li>
        <RouterLink :to="`articles/${articles.author}`">
            {{articles.author}} wrote this article.
        </RouterLink>
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
