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

<template>
    <div class="game-card">
        <header class="game-card-briefing">
            <Title size="24px" margin="10px 0" padding="10px" :text="gameName" />
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium velit porro eaque quia distinctio totam ipsam optio delectus odio vel, reiciendis non voluptatibus repellat error consequatur perferendis cumque! Eveniet amet ipsa aliquam maiores cupiditate.</p>
        </header>
        <footer class="game-card-details">
            <CustomButton class="button" text="Details" />
        </footer>
    </div>
</template>

<style scoped>

    div.game-card header.game-card-briefing {
        margin: 10px;
        padding: 10px;
    }

    div.game-card {
        background-color: var(--color3);
        margin: 15px;
        border-radius: 10px;
        position: relative;
    }

    p.description {
        color: var(--color4);
    }

    footer.game-card-details {
        margin: 10px;
        float: right;
    }

</style>