<template>
    <RouterLink :to="`/books/${book.id}`" >
      {{author.show}} author of {{author.books}}
    </RouterLink>
</template>

<script>
export default {

};
</script>

<style>

</style>
