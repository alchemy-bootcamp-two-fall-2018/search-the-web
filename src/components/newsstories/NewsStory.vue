<template>
  <li>
    <RouterLink :to="`/newsstories/${newsstory.id}`" >
      {{newsstory.title}} by {{newsstory.author}}
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