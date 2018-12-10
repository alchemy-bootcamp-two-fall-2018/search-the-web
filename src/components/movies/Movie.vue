<template>
    <RouterLink :to="`/movies/${movie.id}`">
      {{movie.Title}}
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
