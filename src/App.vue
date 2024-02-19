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
