<template>
    <div>
        <h2>Testing testing</h2>

        <p>{{ message }}</p>

        <button @click="changeMessage">click me</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello, World!"
        }
    },
    methods: {
        changeMessage() {
            this.message = "Goodbye!"
        }
    }
}
</script>

<style scoped>
button {
    font-family: 'Comic Sans MS';
    font-weight: 700;
}
</style>