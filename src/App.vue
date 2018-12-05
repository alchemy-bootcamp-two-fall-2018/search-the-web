<template>
  <div class="app">
    <header>
      <img src="./assets/logo.png">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/newsstories">NewsStories</RouterLink>
      </nav>
    </header>
     <main>
      <RouterView></RouterView>
    </main>
    <footer>
       <a href="https://newsapi.org" target="_blank">Powered by News API</a>
     </footer>
    
  </div>
</template>
<script>
export default {};
</script>
 <style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
 header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 header img {
  height: 100%;
}
 nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
  justify-content: center;
}
 main {
  padding: 8px;
}
footer a {
  height: 50px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
</style>

