<template>
    <li>
      {{article.title}}
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
    padding: 10px;
    text-align: center;
  }
</style>