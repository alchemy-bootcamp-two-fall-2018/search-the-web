<template>
  <div id="app">

    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/articles">Articles</RouterLink>
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
}

header {
  display: flex;
  justify-content: center;
  background: rgb(175, 187, 226);
  border: 1px solid rgb(33, 4, 179);
  padding: 20px;
}

a {
  font-size: 1.5em;
  text-decoration: none;
  font-weight: 600;
  color: darkblue;
}
a:hover {
  color: darkred;
}


</style>
