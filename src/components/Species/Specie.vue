<template>
  <li> 
    <RouterLink :to="`/species/${specie.id}`">
    {{specie.name}} is a {{specie.classification}} and it speaks {{specie.language}}
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

