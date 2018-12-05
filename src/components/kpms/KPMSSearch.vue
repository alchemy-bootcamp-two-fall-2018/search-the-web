<template>
    <form @submit.prevent="onSubmit(keyword)">
        <label>By Fiscal Year:
          <input v-model="keyword.fyear" placeholder="yyyy-yy">
        </label>
        <button>Go</button>
    </form>
</template>

<script>

export default {
  data() {
    return {
      keyword: {}
    };
  },
  props: {
    onSubmit: Function 
  }
};
</script>

<style>

</style>
