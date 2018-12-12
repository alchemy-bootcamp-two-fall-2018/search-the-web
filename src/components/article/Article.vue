<template>
    <li>
        <RouterLink :to="`/articles/${article.id}`">
            {{article.name}} by {{article.author}}
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
