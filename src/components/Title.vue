<template>
    <span class="title"
        :style="{
            fontSize: size || '16px',
            padding,
            margin
        }">{{ text }}</span>
</template>

<style scoped>

    .title {
        display: inline-block;
        color: var(--color0);
        background-color: var(--color2);
        border-radius: 35px;
        z-index: 1;
    }

</style>

<script>

    export default {
        name: 'Title',
        props: {
            text: String,
            size: String,
            padding: String,
            margin: String
        }
    }

</script>