<template>
  <li>
    <RouterLink class="list" v-bind:to="`/movies/${movie.imdbID}`">
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
  li {
    list-style-type: none;
    border: 2px solid black;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 2px 2px 2px gray;
  }
  .list {
    text-decoration: none;
    color: black;
  }
</style>
