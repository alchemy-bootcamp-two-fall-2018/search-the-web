<template>
  <li> 
    <RouterLink :to="`/species/${species.id}`">
    {{species.name}} is a {{species.classification}} and is from {{species.homeworld}}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    specie: Object
  }
}; 
</script>

