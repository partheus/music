<template>
  <footer class="persistent-player">
    <div v-if="currentTrack" class="track-info">

      <img :src="currentTrack.cover" alt="Track cover" class="track-cover">
      <div class="track-details">
        <h4>{{ currentTrack.title }}</h4>
        <p>{{ currentTrack.artist }}</p>
      </div>
    </div>
    <div v-else class="no-track">
      Select a track to play!
    </div>


    <!-- Audio Player Controls -->
    <div class="controls">
      <button @click="playPause">
        <img :src="isPlaying ? pauseIcon : playIcon" alt="Play/Pause">
      </button>
      <input type="range" min="0" :max="duration" v-model="currentTime" @input="seek">
    </div>


  </footer>
</template>


<script>
import playIcon from '@/assets/play-buttton.png';
import pauseIcon from '@/assets/pause.png';
export default {
  name: 'PersistentPlayer',
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      audio: new Audio(),
      currentTrack: {
        title: 'Sample Track',
        artist: 'Artist Name',
        cover: require('@/assets/album-art.png'),
        src: require('@/assets/synthpop.wav')
      },
      playIcon,
      pauseIcon
    };
  },
  mounted() {
    // Set up audio element events
    this.audio.src = this.currentTrack.src;
    this.audio.addEventListener('timeupdate', this.updateTime);
    this.audio.addEventListener('ended', this.resetPlayer);
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });
  },
  beforeUnmount() {
    // Remove event listeners
    this.audio.removeEventListener('timeupdate', this.updateTime);
    this.audio.removeEventListener('ended', this.resetPlayer);
  },
  methods: {
    playPause() {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateTime() {
      this.currentTime = this.audio.currentTime;
    },
    resetPlayer() {
      this.isPlaying = false;
      this.currentTime = 0;
    },
    seek(event) {
      const time = event.target.value;
      this.audio.currentTime = time;
      this.currentTime = time;
    }
  }
};
</script>

<style scoped>
.persistent-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
}

.track-info {
  display: flex;
  align-items: center;
}

.track-cover {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 16px;
}

.track-details h4,
.track-details p {
  margin: 0;
}

.controls {
  margin-left: auto;
  display: flex;
  align-items: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

button img {
  width: 32px;
  height: 32px;
}

input[type="range"] {
  margin-left: 16px;
}
</style>
