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

<script>
export default {

}; 
</script>

<style>
main {
  padding: 10px;
}
</style>

