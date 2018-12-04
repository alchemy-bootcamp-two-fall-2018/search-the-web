<template>
  <li>
    <RouterLink v-bind:to="`/movies/${movie.imdbID}`">
      {{movie.Title}} released in {{movie.Year}}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    movie: Object
  }

};
</script>

<style>

</style>
