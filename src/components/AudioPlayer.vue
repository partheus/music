<template>
  <div class="audio-player">
    <div ref="waveform" class="waveform"></div>
    <div class="controls">
      <button @click="playPause">{{ playing ? 'Pause' : 'Play' }}</button>
      <button @click="stop">Stop</button>
      <!-- Add more controls as needed -->
    </div>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js';

export default {
  name: 'AudioPlayer',
  data() {
    return {
      wavesurfer: null,
      playing: false,
    };
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: this.$refs.waveform,
      waveColor: '#D9DDDC',
      progressColor: '#4A626F',
      cursorColor: '#4A626F',
      backend: 'WebAudio',
      height: 100,
      barWidth: 2,
      normalize: true,
      responsive: true,
      hideScrollbar: true
    });

    this.wavesurfer.load(require('@/assets/tracks/bday.wav'));

    this.wavesurfer.on('play', () => {
      this.playing = true;
    });

    this.wavesurfer.on('pause', () => {
      this.playing = false;
    });

    this.wavesurfer.on('finish', () => {
      this.playing = false;
    });
  },
  methods: {
    playPause() {
      this.wavesurfer.playPause();
    },
    stop() {
      this.wavesurfer.stop();
      this.playing = false;
    }
  },
  beforeUnmount() {
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }
  }
};
</script>

<style scoped>
.audio-player {
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.controls button {
  background-color: #4A626F;
  color: #ffffff;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.controls button:hover {
  background-color: #6C8494;
}

.waveform {
  cursor: pointer;
}

/* Add custom styles for your audio player here */
</style>
