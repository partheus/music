<template>
  <div class="remix-music">
    <h2>Remix Music</h2>
    <p>Coming SOOOOOON!</p>
    <ul>
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
  name: 'RemixMusic',
  data() {
    return {
      tracks: trackData.filter((track) => track.type === 'remix')
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
.remix-music {
  padding: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
.track-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.track-item:hover {
  background-color: #f0f0f0;
}
.track-cover {
  width: 50px;
  height: 50px;
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
  font-size: 1.2rem;
}
.track-details p {
  margin: 0;
  color: #666;
  font-size: 1rem;
}
</style>
