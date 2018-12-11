<template>
    <RouterLink :to="`/movies/${movie.id}`">
      <li>{{movie.Title}}</li>
    </RouterLink>
    
</template>

<script>
export default {
  props:{
    movie: Object
  }
};
</script>

<style>

</style>
