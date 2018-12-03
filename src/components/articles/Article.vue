<template>
  <section>
    <h2>Articles</h2>
    <div class="search-container">
      <ul v-if="articles">
        <Article v-for="(article, i) in articles"
          :key="i"
          :article="article"
        />
      </ul>

    </div>
  </section>
</template>

<script>
import Article from './Article'; 

export default {
  components: {
    Article,

  }
};

</script>


<style>

</style>