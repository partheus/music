<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/originals">Originals</router-link></li>
        <li><router-link to="/remixes">Remixes</router-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
  </div>

  <header>
    <!-- Volume Control Slider -->
    <div class="volume-control">
      <label for="volume-slider">Volume:</label>
      <input type="range" width="200px" id="volume-slider" min="0" max="1" step="0.01"
             v-model="volume" @input="adjustVolume" />
    </div>
  </header>

  <div id="app">
    <router-view/><!--    <audio-player></audio-player>-->
    <persistent-player :volume="volume" />
  </div>

</template>

<script>
// import AudioPlayer from "@/components/AudioPlayer.vue";
import PersistentPlayer from "@/components/PersistentPlayer.vue";

export default {
  name: 'App',
  components: {
    PersistentPlayer
  },
  data() {
    return {
      volume: 0.3, // Start with a volume of 30%
    };
  },
  methods: {
    adjustVolume() {
      this.$emit('volume-change', this.volume);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2em;
  font-size: 120%;
}

/* Add styling for your navigation menu here */
nav ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
  display: flex;
  column-gap: 2em;
  justify-content: space-evenly;
  align-items: center;
  font-size: 120%;
  max-width: 60vw;
}

/* Additional styles can go here */
.volume-control {
  text-align: center; /* Center the slider if needed */
  padding: 1em;
}

/* You can style the slider here */
#volume-slider[type="range"] {
  /* Slider styling */
  width: 180px;
  margin: 1em;
}

</style>
