<template>
    <a :href="link">{{ text }}</a>
</template>

<style>
    a {
        color: var(--color5);
        cursor: pointer;
    }
</style>

<script>
    export default {
        name: 'Anchor',
        props: {
            text: String,
            link: String
        }
    }
</script>