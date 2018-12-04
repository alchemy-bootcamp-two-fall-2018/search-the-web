<template>
  <section class="news">
    <h2>News</h2>

    <NewsSearch :onSearch="handleSearch" :search="search" />

    <Loader :loading="loading" />

    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{ search }}&quot; - found {{total}} - page {{page}} of {{totalPages}}
      <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
    </p>
  </section>
</template>

<script>
export default {

};
</script>

<style>

</style>
