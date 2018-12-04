<template>
    <li>
        <RouterLink :to="`/news/${articles.id}`" >
            {{news.articles}}
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
