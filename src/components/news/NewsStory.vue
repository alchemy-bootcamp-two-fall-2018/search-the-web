<template>
  <li>
    <RouterLink :to="`/news/${newsStory.id}`">
    {{newsStory.name}} something something
    </RouterLink>
  </li>
</template>

<script>
export default {

};
</script>

<style>

</style>
