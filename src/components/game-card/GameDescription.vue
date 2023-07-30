<script>
    export default {
        name: 'GameDescription',
        props: {
            gameDescription: String
        }
    }
</script>

<template>
    <div>
        <p>{{ gameDescription }}</p>
    </div>
</template>

<style scoped>

    div { background-color: transparent; }

    div p {
        color: var(--color4);
        font-size: 1.1rem;
    }

</style>