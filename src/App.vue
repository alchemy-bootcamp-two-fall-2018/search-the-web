<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/species">Species</RouterLink>
      </nav>
    </header>
    
    <main> 
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
header {
  height: 75px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
header img {
  height: 100%;
}
nav a {
  text-decoration: none;
  color: white;
  margin: 3px;
  padding: 10px;
  border: 1px solid white;
}
</style>

