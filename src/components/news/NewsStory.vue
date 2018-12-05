<template>
  <li>
    <a :href="newsStory.url">{{newsStory.title}}</a>
  </li>
</template>

<script>
export default {
  props: {
    newsStory: Object
  }
};
</script>

<style>

</style>
