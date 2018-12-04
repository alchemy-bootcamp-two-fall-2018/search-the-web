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
li {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3em;
}
</style>