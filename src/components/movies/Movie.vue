<template>
    <li>
        <RouterLink :to="`/movies/${movie.id}`" >
      {{movie.name}} Release {{movie.year}}
    </RouterLink>
    </li>
</template>

<script>
export default {

};
</script>

<style>

</style>
