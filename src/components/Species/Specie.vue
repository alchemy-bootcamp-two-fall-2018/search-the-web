<template>
  <li> 
    <RouterLink :to="`/species/${specie.id}`">
    {{specie.name}} is a {{specie.classification}} and is from {{specie.homeworld}}
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

