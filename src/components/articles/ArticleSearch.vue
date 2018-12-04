<template>
    <form @submit.prevent="handeSubmit">
        <h3>Article Search</h3>
        <input v-model="keyword">
        <button>Search</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            keyword: this.news || ''
        };
    },
    props: {
        onSearch:Function
    },
    methods: {
        handleSubmit() {
            this.$router.push({
                query: {
                    news: encodeURIComponent(this.keyword)
                }
            });
        }
    },
    watch: {
        news(newSearch) {
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