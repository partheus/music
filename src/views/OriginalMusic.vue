<template>
  <div class="original-music">
    <h2>Original Music</h2>
    <ul class="track-list">
      <li v-for="track in tracks" :key="track.id" @click="selectTrack(track)" class="track-item">
        <div class="track-info">
          <img :src="track.cover" :alt="`${track.title} cover`" class="track-cover">
          <div class="track-details">
            <h3>{{ track.title }}</h3>
            <p>{{ track.artist }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '@/event-bus';
import { trackData, getTrackSource } from '@/tracks';

export default {
  name: 'OriginalMusic',
  data() {
    return {
      tracks: trackData.filter((track) => track.type === 'original')
    };
  },
  methods: {
    selectTrack(track) {
      EventBus.setCurrentTrack({
        ...track,
        src: getTrackSource(track.filename)
      });
    }
  }
};
</script>

<style scoped>
.track-list {
  list-style: none;
  padding: 1em;
  margin: 20px auto; /* Adjust top and bottom margins as needed */
  height: 40vh; /* Adjust based on the desired fraction of the viewport height */
  overflow-y: auto; /* Show scrollbar only when necessary */

  @media (min-width: 768px) {
    max-width: 60vw; /* Adjust based on the desired width */
  }
}
.track-item {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.124);
  padding: 1em 2em;
  border-radius: 0.5em;
  font-size: 70%;
}
.track-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.32);
}
.track-cover {
  width: 5em;
  height: 5em;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 50%;
}
.track-info {
  display: flex;
  align-items: center;
}
.track-details h3 {
  margin: 0;
  color: #333;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}
.track-details p {
  margin: 0;
  color: #666;
  font-size: 1.25rem;
}
.track-details{
  text-align: left;
}</style>
