<template>
  <div class="app">
    <header>
      <nav id="top">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/articles">Articles</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#top {
    display: flex;
    justify-content: space-around;
    background-color: rgb(65,63,64);
    color: white;
    padding: 20px;
}
a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
}
body {
    margin: 0;

    height: 100%;
}
main {
    color: black;
}
</style>
