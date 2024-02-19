<template>
  <div>
    <h1>Welcome to My Music Interaction Website</h1>
    <audio-player></audio-player>
    <!-- Other content for Home page -->
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer.vue';

export default {
  name: 'HomePage', // Updated the name of the component
  components: {
    AudioPlayer
  }
};
</script>
