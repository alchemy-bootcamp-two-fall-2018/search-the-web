<template>
    <li>
        <RouterLink :to="`articles/${article.author}`">
            {{article.title}}
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
