<template>
  <div id="app">
    <header>
      <h1>Movie Finder</h1>
      <nav>
        <RouterLink class="home" to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
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
}
nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0;
    padding-top: 18px;
}
nav a {
    color: black;
    text-decoration: none;
    padding: 1px;
    background-color: white;
    width: 15%;
    border: 2px solid black;
    height: 25px;
}
.home {
  margin-top: 250px;
}
main {
  padding: 8px;
}
h1 {
  color: white;
  font-size: 3.3em;
  text-shadow: 5px 5px 5px black;
  text-align: center;
  margin: 0px;
  padding-top: 30px;
}
header {
  height: 400px;
  margin-bottom: 0px;
  background-image: url('./assets/marvel.jpg');
  background-repeat: repeat-x;
  background-size: 400px;
}
</style>
