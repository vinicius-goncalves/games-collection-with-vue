<template>
    <div>
        <Title
            size="24px"
            margin="10px"
            padding="15px"
            :text="gameName" />
        <GameDescription :text="gameDescription"/>
        <footer>
            <GameTag v-for="genre in genres" :genres="genres" :tag="genre"/>
        </footer>
    </div>
</template>

<style scoped>

    div {
        margin: 25px;
        min-height: 250px;
        background-color: var(--color3);
        border-radius: 10px;
        position: relative;
    }

    footer {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

</style>

<script>

    import Title from '../Title.vue'
    import GameDescription from './GameDescription.vue'
    import GameTag from './GameTag.vue'

    export default {

        name: 'GameCard',

        components: {
            Title,
            GameDescription,
            GameTag
        },

        props: {
            gameName: {
                type: String
            },
            gameDescription: {
                type: String
            },
            genres: {
                type: Array
            }
        }
    }

</script>