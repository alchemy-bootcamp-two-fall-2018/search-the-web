<template>
  <li>
    <RouterLink :to="`/items/${item.id}`" >
      {{item.name}}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style>
</style>