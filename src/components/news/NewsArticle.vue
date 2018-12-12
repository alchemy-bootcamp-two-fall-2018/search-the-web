<template>
    <li v-if="newsArticle">
        <a :href="newsArticle.url" target="_blank"><h4>{{newsArticle.title}}</h4></a>
        <p>{{newsArticle.description}}</p>
    </li>
</template>

<script>
export default {
  props: {
    newsArticle: Object
  }
};
</script>