<template>
    <form @submit.prevent="handeSubmit">
        <h3>Article Search</h3>
        <input v-model="keyword">
        <button>Submit</button>
    </form>
</template>

<script>
export default {
}
</script>

<style>
h3 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3em;
}
</style>