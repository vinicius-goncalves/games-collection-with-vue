<template>
    <div>
        <h1 :style="{ textAlign: headerPosition }">{{ header }}</h1>
        <p :style="{ textAlign: bodyPosition }">{{ body }}</p>
    </div>
</template>

<style scoped>
    div {
        font-family: Arial, sans-serif;
        background-color: var(--color3);
        color: var(--color0);
        margin: 25px;
        padding: 10px;
        border-radius: 10px;
        word-wrap: break-word;
    }

    h1 {
        font-size: 3.4rem;
        position: relative;
    }

</style>

<script>
    export default {
        name: 'Panel',
        props: { header: String, body: String },
        props: {

            header: String,
            body: String,

            headerPosition: String,
            bodyPosition: String

        }
    }
</script>