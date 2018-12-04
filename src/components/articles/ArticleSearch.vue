<template>
  <div>
    <h3>Article Search</h3>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="keyword">
        <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: this.q || ''
        };
    },
    props: {
        q: String,
        onSearch: Function
    },
    methods: {
        handleSubmit() {
            this.$router.push({
                query: {
                    q: encodeURIComponent(this.keyword)
                }
            });
        }
    },

    watch: {
    q(newSearch) {
        if(this.keyword !== newSearch) {
            this.keyword = newSearch;
        }
    }
} 
};
</script>

<style>
h3 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3em;
}
</style>