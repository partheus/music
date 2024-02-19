<template>
  <div class="music-container">
    <h2>Remix Music</h2>
    <p>Coming soon!</p>
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

</style>
