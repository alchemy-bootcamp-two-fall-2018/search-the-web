<template>
  <li>
    <RouterLink :to="`/item/${item.id}`" >
      {{item.name}} / {{item.title}}
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