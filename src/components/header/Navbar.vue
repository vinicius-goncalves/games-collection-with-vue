<template>
    <nav>
        <Title class="title" size="32px" padding="15px" text="My Games Library" />
    </nav>
</template>

<style scoped>

    nav {
        background-color: #2C2B3E;
        min-height: fit-content;
        min-width: 100vw;
        padding: 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        nav {
            display: flex;
            justify-content: center;
        }

        nav .title {
            font-size: 16px !important;
            text-align: center;
        }
    }

</style>

<script>

    import Title from '../Title.vue'
    import Anchor from '../header/Anchor.vue'

    export default {
        name: 'Navbar',
        components: { Title, Anchor }
    }

</script>