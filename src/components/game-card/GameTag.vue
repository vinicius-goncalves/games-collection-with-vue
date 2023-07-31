<template>
    <span class="game-tag">{{ tag }}</span>
</template>

<style scoped>

    span {
        display: inline-block;
        color: var(--color0);
        background-color: var(--color2);
        border-radius: 35px;
        padding: 10px;
        margin: 5px;
        z-index: 1;
    }

</style>

<script>

    export default {
        name: 'GameTag',
        props: {
            tag: {
                type: String
            }
        }
    }

</script>