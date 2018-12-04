<template>
  <section>
    <h2> Welcome to Star Wars! </h2>
    <img src="https://cdn.themefoxx.com/wp-content/uploads/2017/12/Minimal-Star-Wars-Wallpapers.png">
    <RouterLink id="link" to="/species"> Search Species </RouterLink>
  </section>
</template>

<style>
img {
    height: 70%;
    width: auto;
    position: absolute;
    z-index: -1;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}

h2 {
  text-align: center;
  font-size: 20pt;
}

#link {
  height: 75px;
  background: black;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  margin: 3px;
  padding: 10px;
  border: 1px solid white;
}
</style>


