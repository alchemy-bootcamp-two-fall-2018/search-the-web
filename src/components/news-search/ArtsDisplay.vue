<template>
  <li>
    {{display.name}} by {{display.author}}
  </li>
</template>

<script>
export default {
  props: {
    display: Object
  }
};
</script>

<style>

</style>
