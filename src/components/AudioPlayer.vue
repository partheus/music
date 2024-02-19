<template>
  <div class="audio-player">
    <audio controls>
      <source :src="audioSrc" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data() {
    return {
      audioSrc: require('@/assets/synthpop.wav')
    };
  }
};
</script>

<style scoped>
.audio-player {
  /* Styling for your audio player */
}
</style>
