
<template>
    <li v-if="news">
        <a :href="news.url" target="_blank"><h4>{{news.title}}</h4></a>
        <p>{{news.description}}</p>
    </li>
</template>

<script>
export default {
  props: {
    news: Object
  }
};
</script>