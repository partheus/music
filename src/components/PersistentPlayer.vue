<template>
  <footer class="persistent-player">
    <div v-if="currentTrack" class="track-info">
      <img :src="currentTrack.cover" alt="Track cover" class="track-cover">
      <div class="track-details">
        <h4>{{ currentTrack.title }}</h4>
        <p>{{ currentTrack.duration }}</p>
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
      <input type="range"
             min="0"
             :max="duration"
             step="0.1"
             v-model="currentTime"
             @input="seek"
             @change="seek"
             class="seek-bar"
             id="seek-bar"
      />
    </div>


  </footer>
</template>


<script>
import playIcon from '@/assets/play-buttton.png';
import pauseIcon from '@/assets/pause.png';
import EventBus from '@/event-bus';

export default {
  name: 'PersistentPlayer',
  props: {
    volume: {
      type: Number,
      default: 0.3
    }
  },
  watch: {
    volume(newVolume) {
      this.audio.volume = newVolume;
    }
  },
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
        src: require('@/assets/tracks/bday.wav')
      },
      playIcon,
      pauseIcon
    };
  },
  mounted() {
    // Set up audio element events
    this.audio.volume = this.volume;
    // Watch for changes on the currentTrack reactive property
    const state = EventBus.getState();
    this.$watch(() => state.currentTrack, (newTrack) => {
      this.currentTrack = newTrack; // The current track is now updated
      if (newTrack) {
        this.setTrack(newTrack);
      } else {
        this.resetPlayer(); // This should stop the audio and clear state
      }
    }, { immediate: true });
    this.audio.addEventListener('timeupdate', this.updateTime);
  },
  beforeUnmount() {
    // Remove event listeners
    this.audio.removeEventListener('timeupdate', this.updateTime);
    this.audio.removeEventListener('ended', this.resetPlayer);
  },
  methods: {
    setTrack(track) {
      this.audio.src = track.src;
      this.audio.load();  // necessary to apply the new source
      this.audio.play();
      this.isPlaying = true;

      // Set the duration once the metadata is loaded
      this.audio.onloadedmetadata = () => {
        this.duration = this.audio.duration;
      };

      // Reset the time when the audio ends
      this.audio.onended = () => {
        this.currentTime = 0;
        this.isPlaying = false;
      };

      // Other methods you have very likely remain the same...
    },
    resetPlayer() {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
      }
      this.currentTrack = null; // Clear the track info
    },
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
    seek(event) {
      const time = event.target.value;
      this.audio.currentTime = time;
      this.currentTime = time;
    }
  }
};
</script>
