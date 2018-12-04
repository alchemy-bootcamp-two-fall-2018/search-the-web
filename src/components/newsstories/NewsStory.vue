<template>
  <li>
    <RouterLink :to="`/newsstories/${newsstory.id}`" >
      {{newsstory.title}} 
    </RouterLink>
    <!-- {{newsstory.title}} by {{newsstory.author}} -->
  </li>
</template>

<script>
export default {
    props: {
        newsstory: Object
    }
};
</script>

<style>
</style>