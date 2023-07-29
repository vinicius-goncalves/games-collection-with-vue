<template>
    <header>
      <Navbar/>
    </header>
    <main>

      <div v-if="games.length === 0">
        <Panel
          header="Loading games..."
          body="Please waiting for gaming loading."
            />
      </div>

      <div v-else>
          <Panel
            :header="Panel.header"
            :body="Panel.body"
            headerPosition="left"
            bodyPosition="left" />

          <section>
            <GameCard
              v-for="game in games"
              :gameName="game.name"
              :genres="[ game.genre, ...game.other_genres ]"/>
        </section>
      </div>

    </main>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --color0: #9E86FF;
    --color1: #4016EB;
    --color2: #704ff146;
    --color3: #2C2B3E;

    --color4: #FFFFFF;
    --color5: #0D0D0D;
  }

  #app {
      font: 17px 'Quicksand';
      background-color: #131417;
      min-height: 100vh;
      overflow: hidden;
  }

</style>

<script>

  import Navbar from './components/header/Navbar.vue'
  import Panel from './components/Panel.vue'
  import GameCard from './components/game-card/GameCard.vue'

  import games from '../src/data/games-library.json'

  export default {

      name: 'App',

      components: {
          Navbar,
          Panel,
          GameCard
      },

      data: () => ({
          games: [],
          Panel: {
              header: 'Explore',
              body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it'
          }
      }),

      mounted() {

          const randomGames = games
                .map(game => ({ sort: Math.random(), game }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ game }) => game)
                .slice(0, 10)

          this.games = randomGames
      }
  }

</script>