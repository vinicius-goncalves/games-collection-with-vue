<template>
    <div>
        <Title
            size="24px"
            margin="10px"
            padding="15px"
            :text="gameName" />
        <GameDescription :text="gameDescription" />
    </div>
</template>

<style scoped>

    div {
        margin: 25px;
        min-height: 250px;
        background-color: var(--color3);
        border-radius: 10px;
    }

</style>

<script>

    import Title from '../Title.vue'
    import GameDescription from './GameDescription.vue'

    export default {
        name: 'GameCard',
        components: {
            Title,
            GameDescription
        },
        props: {
            gameName: String,
            gameDescription: String
        }
    }

</script>