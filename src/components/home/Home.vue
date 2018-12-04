<template>
  <section class="home">
    <h2>Welcome to the Movie Search!</h2>
    <RouterLink class="movie-search" to="/movies">Search for a Movie</RouterLink>
  </section>
</template>

<style>
  .movie-search {
    color: red;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    font-weight: 500;
  }
  .movie-search:hover {
    background: lightgray;
  }
  .home {
    position: relative;
    top: -250px;
  }
</style>
