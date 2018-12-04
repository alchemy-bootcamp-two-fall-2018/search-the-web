<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/arts">Keyword Search</RouterLink>
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
  color: #2c3e50;
  margin-top: 60px;
}

header {
  height: 100px;
  background: rgb(149, 168, 103);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}

main {
  padding: 8px;
}
</style>
