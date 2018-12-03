<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/books">Books</RouterLink>
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
header {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  margin-right: 20px;
  border: 1px solid black;
  flex-direction: flex-end;
}

</style>
