<script>

    export default {
        name: 'GameDetail',

        props: {
            strong: { type: String },
            value: { type: String }
        }
    }

</script>

<template>
    <div>
        <p>- <strong>{{ strong }}</strong>: {{ value }}</p>
    </div>
</template>

<style scoped>
    div > p {
        color: var(--color0);
        font-size: 1.2rem;
    }
</style>