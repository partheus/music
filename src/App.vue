<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/remixes">Remixed Music</router-link></li>
        <li><router-link to="/originals">Original Music</router-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
  </div>

  <div id="app">
    <audio-player></audio-player>
    <router-view/>
    <persistent-player />
  </div>

</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
import PersistentPlayer from "@/components/PersistentPlayer.vue";

export default {
  name: 'App',
  components: {
    PersistentPlayer,
    AudioPlayer
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
  margin-top: 60px;
}

/* Add styling for your navigation menu here */
nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}

</style>
