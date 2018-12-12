<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="keyword">
    <button>Search </button>
  </form>
</template>

<script>
export default {
    props: {
        search: String,
        onSearch: Function
    },
    data() {
        return {
            keyword: this.search || ''
        };
    },
    
    watch: {
        search(newSearch) {
            console.log('step 2 new search from watch', newSearch);
            if(this.keyword !== newSearch) {
                this.keyword = newSearch;
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log('handle submit fires from articleSearch comp step 1', this.keyword);
            this.$router.push({
                query: {
                    search: encodeURIComponent(this.keyword)
                }
            });
        }
    }
};
</script>
<style>
</style>