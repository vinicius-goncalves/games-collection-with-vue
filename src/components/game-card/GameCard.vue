<script>

    import Title from '../Title.vue'
    import CustomButton from '../CustomButton.vue'

    import GameDescription from './GameDescription.vue'
    import GameTag from './GameTag.vue'
    import GameDetail from './GameDetail.vue'

    export default {

        name: 'GameCard',

        data: () => ({
            showMainCard: true,
            randomText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, numquam. '.repeat(5),
            style: {
                padding: '10px'
            },
            gameDetails: null
        }),

        components: {
            Title,
            CustomButton,

            GameDescription,
            GameTag,
            GameDetail
        },

        props: {
            gameImage: {
                type: String
            },
            gameName: {
                type: String
            },
            gameDescription: {
                type: String
            },
            gameGenres: {
                type: Array
            },
            details: {
                type: String
            },
            currGame: {
                type: Object
            }
        },

        methods: {
            toggleMainCard() {
                this.showMainCard = !this.showMainCard
            }
        },

        mounted() {

            function transformText(text) {
              const matchUnderlines = /[_]/gi
              const matchLowerCaseChars = /(\b[a-z])/g

              const textWithoutUnderlines = text.replace(matchUnderlines, ' ')
              const res = textWithoutUnderlines.replace(matchLowerCaseChars, (char) => char.toUpperCase())

              return res
          }

            const entries = Object.entries(this.currGame)
                .filter(([ key ]) => ['name', 'developer', 'publisher', 'release_date'].includes(key))
            this.gameDetails = entries.reduce((acc, item) => (acc[transformText(item[0])] = item[1]) && acc, {})

        }
    }

</script>

<template>

    <div v-if="showMainCard" class="game-card" :game="currGame">
        <div class="game-card-image-wrapper">
            <div class="overlay"></div>
            <img class="game-card-image" :src="gameImage">
        </div>
        <div class="game-card-information-wrapper">
            <header class="game-card-briefing">
                <Title size="24px" margin="10px 0" :padding="style.padding" :text="gameName" />
                <p class="description" :details="details">{{ details }}</p>
                <div data-game-card="details">
                    <GameDetail
                        v-for="(gameDetail, key) in gameDetails"
                        :strong="key"
                        :value="gameDetail" />
                </div>
                <GameTag v-for="genre in gameGenres" :genres="gameGenres" :tag="genre"/>
            </header>
            <footer class="game-card-details">
                <CustomButton @click="toggleMainCard" class="button" text="Undo" />
            </footer>
        </div>
    </div>

    <div v-if="!showMainCard" class="game-card">
        <div class="game-card-image-wrapper">
            <div class="overlay"></div>
            <img class="game-card-image" :src="gameImage" width="250">
        </div>
        <div class="game-card-information-wrapper">
            <header class="game-card-briefing">
                <Title size="24px" margin="10px 0" padding="10px" :text="gameName" />
                <p class="description">{{ randomText }}</p>
            </header>
            <footer class="game-card-details">
                <CustomButton @click="toggleMainCard" class="button" text="Details" />
            </footer>
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

    div.game-card-image-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    div.game-card-image-wrapper div.overlay {
        min-width: 100%;
        min-height: 100%;
        background-image: linear-gradient(to right, transparent 1%, #2C2B3E 100%);
        position: absolute;
    }

    div.game-card-image-wrapper img.game-card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        float: left;
    }

    div.game-card div.game-card-information-wrapper {
        min-width: 75%;
        position: relative;
        word-wrap: break-word;
    }

    div.game-card header.game-card-briefing {
        margin: 10px;
        padding: 10px;
    }

    div[data-game-card="details"] {
        margin: 10px;
    }

    p.description {
        color: var(--color4);
    }

    footer.game-card-details {
        right: 5%;
        bottom: 5%;
        float: right;
    }
</style>