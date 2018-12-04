<template>
    <div class="app">
        <header>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/news">News</RouterLink>
            </nav>
        </header>

        <main>
            <RouterView></RouterView>
        </main>

    </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
