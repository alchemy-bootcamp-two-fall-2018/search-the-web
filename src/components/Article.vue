<template>
    <RouterLink :to="`/articles/${article.id}`" >
      {{article.title}} : {{article.description}}
    </RouterLink>
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
