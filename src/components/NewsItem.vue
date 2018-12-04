<template>
    <section>
        <li>
            <!-- <RouterLink to="`/news/${newsItem.article}"> -->
            {{newsItem.title}}
            <!-- </RouterLink> -->
        </li>
        
    </section>
</template>

<script>
export default {
    props: {
        newsItem: Object
    }
};
</script>

<style>

</style>
