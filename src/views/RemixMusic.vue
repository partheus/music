<template>
  <div class="music-container">
    <h1>Remix Music</h1>
    <h4>Featured track: <span class="featured-track">Nautilus ("What's Next" by Drake Remix)</span></h4>
    <ul class="track-list">
      <li v-for="track in tracks" :key="track.id"
          :class="{ 'currently-playing': track.id === currentlyPlayingId }"
          @click="selectTrack(track)" class="track-item">
        <div class="track-info">
          <!--          <img :src="track.cover" :alt="`${track.title} cover`" class="track-cover">-->
          <div class="track-details">
            <h3>{{ track.title }}</h3>
            <!--            <p>{{ track.artist }}</p>-->
            <p>[{{ track.genre }}]</p>
          </div>
        </div>
        <div class="track-duration">{{ track.duration }}</div>
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
      tracks: trackData.filter((track) => track.type === 'remix'),
      currentlyPlayingId: null
    };
  },
  methods: {
    selectTrack(track) {
      // set ID of the track that is currently playing
      this.currentlyPlayingId = track.id;
      // emit the event to the EventBus
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
