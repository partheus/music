<template>
  <div class="original-music">
    <h2>Original Music</h2>
    <ul>
      <li v-for="track in tracks" :key="track.id">
        {{ track.title }} - {{ track.artist }}
        <!-- You might want to add an audio player component for each track here -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OriginalMusic',
  data() {
    return {
      tracks: [
        { id: 1, title: 'Synth Journey', artist: 'Synthwave Project'},
        { id: 2, title: 'Retro Dreams', artist: 'Dreamwave'},
        // Add more tracks as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Add styling for your Original Music page here */
</style>
