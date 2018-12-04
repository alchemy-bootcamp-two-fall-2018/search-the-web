<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink class="navbar" to="/">Home</RouterLink>
        <div></div>
        <RouterLink class="navbar" to="/news">News</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>

  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background: gray;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
}

.navbar {
  background: white;
  margin: 50px;
  /* padding: 10px; */
}
</style>
