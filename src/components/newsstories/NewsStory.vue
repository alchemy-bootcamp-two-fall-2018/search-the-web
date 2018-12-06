<template>
  <li v:if="newsstory">
      <a :href="newsstory.url" target="_blank">
        <p>{{newsstory.title}} by {{newsstory.author}}</p>
      </a>
    <!-- <RouterLink :to="`/newsstories/${newsstory.id}`" >
      {{newsstory.title}} 
    </RouterLink> -->

  </li>
</template>

<script>
export default {
    props: {
        newsstory: Object
    }
};
</script>

<style scoped>
li {
  text-align: left;
  list-style: none;
}
p {
  font-size: 1.15em;
  font-weight:bold;
  font-family: Times;
  margin: 3px;
}
</style>