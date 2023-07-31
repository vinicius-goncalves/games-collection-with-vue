<script>

    import Title from '../Title.vue'
    import CustomButton from '../CustomButton.vue'

    import GameDescription from './GameDescription.vue'
    import GameTag from './GameTag.vue'
    import GameDetail from './GameDetail.vue'

    import {
        filterObjectByKey
    } from '../../js/utils.js'

    export default {

        name: 'GameCard',

        data: () => ({
            showMainCard: true,
            randomText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, numquam. '.repeat(5),
            style: {
                padding: '10px'
            },
            gameDetails: null,
            buttons: {
                showDetailsText: null
            }
        }),

        components: {
            Title,
            CustomButton,

            GameDescription,
            GameTag,
            GameDetail
        },

        props: {
            currGame: {
                type: Object
            },
            details: {
                type: String
            }
        },

        methods: {
            toggleCardVisibility() {
                this.showMainCard = !this.showMainCard
            }
        },

        beforeMount() {

            this.buttons.showDetailsText = this.showMainCard
                ? 'Details'
                : 'Back'

            const keys = ['name', 'developer', 'publisher', 'release_date']
            this.gameDetails = filterObjectByKey(this.currGame, ...keys)
        }
    }

</script>

<template>

    <div class="game-card">
        <div data-game-card="image-wrapper">
            <div class="image-overlay"></div>
            <img data-game-card="image" :src="currGame.image">
        </div>
        <div data-game-card="main-content">

            <div v-if="showMainCard">
                <header data-game-card="briefing">
                    <Title size="24px" margin="10px 0" padding="10px" :text="currGame.name" />
                    <p class="description">{{ randomText }}</p>
                </header>
                <footer data-game-card="details-wrapper">
                    <CustomButton @click="toggleCardVisibility" class="button" :text="buttons.showDetailsText" />
                </footer>
            </div>

            <div v-if="!showMainCard">
                <header data-game-card="briefing">
                    <Title size="24px" margin="10px 0" :padding="style.padding" :text="currGame.name" />
                    <p class="description">You are seeing details of {{ currGame.name }}:</p>
                    <div data-game-card="details">
                        <div>
                            <GameDetail v-for="(detail, key) in gameDetails" :strong="key" :value="detail" />
                        </div>
                        <div data-game-card="tags">
                            <GameTag v-for="genre in currGame.other_genres" :tag="genre" />
                        </div>
                    </div>
                </header>
                <footer data-game-card="details-wrapper">
                    <CustomButton @click="toggleCardVisibility" class="button" text="Back" />
                </footer>
            </div>

        </div>
    </div>

</template>

<style scoped>

    div.game-card {
        background-color: var(--color3);
        margin: 15px;
        border-radius: 10px;
        position: relative;
        display: flex;
        overflow: hidden;
    }

    div[data-game-card="image-wrapper"] {
        width: 65%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    div[data-game-card="image-wrapper"] div.image-overlay {
        min-width: 100%;
        min-height: 100%;
        background-image: linear-gradient(to right, transparent 1%, #2C2B3E 100%);
        position: absolute;
    }

    div[data-game-card="image-wrapper"] img[data-game-card="image"] {
        width: 100%;
        height: 100%;
        object-fit: cover;
        float: left;
    }

    div.game-card div[data-game-card="main-content"] {
        min-width: 65%;
        position: relative;
        word-wrap: break-word;
    }

    div.game-card header[data-game-card="briefing"] {
        max-width: 500px;
        margin: 10px;
        padding: 10px;
    }

    div[data-game-card="details"] {
        margin: 10px;
        display: flex;
        flex-direction: column;
    }

    div[data-game-card="tags"] {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        align-items: center;
        margin: 10px 0;
        text-align: center;
        word-wrap: break-word;
    }

    p.description {
        color: var(--color4);
    }

    footer[data-game-card="details-wrapper"] {
        right: 5%;
        bottom: 5%;
        float: right;
    }

    @media screen and (max-width: 400px) {
        div[data-game-card="image-wrapper"] {
            display: none;
        }

        header[data-game-card="briefing"] {
            display: flex;
            flex-direction: column;
            text-align: justify;
        }

    footer[data-game-card="details-wrapper"] {
            float: none;
            text-align: center;
        }
    }

</style>