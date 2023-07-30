<template>
    <div class="game-card">
        <Title size="24px" margin="10px" padding="15px" :text="gameName" />
        <GameDescription :text="gameDescription" />
        <footer class="game-card-details">
            <CustomButton text="Details" />
            <div>
                <GameTag v-for="genre in genres" :genres="genres" :tag="genre" />
            </div>
        </footer>
    </div>
</template>

<style scoped>
    div.game-card {
        background-color: var(--color3);
        margin: 15px;
        padding: 10px;
        min-height: 250px;
        border-radius: 10px;
    }

    footer.game-card-details {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    footer.game-card-details div {

        display: flex;

        position: absolute;
        bottom: 10px;
        right: 10px;
    }

</style>

<script>

    import Title from '../Title.vue'
    import CustomButton from '../CustomButton.vue'

    import GameDescription from './GameDescription.vue'
    import GameTag from './GameTag.vue'

    export default {

        name: 'GameCard',

        components: {

            Title,
            CustomButton,

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