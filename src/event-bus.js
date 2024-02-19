import { reactive, readonly } from "vue";

const state = reactive({
    currentTrack: null,
});

const EventBus = {
    setCurrentTrack(track) {
        state.currentTrack = track;
    },
    clearCurrentTrack() {
        state.currentTrack = null;
    },
    getState() {
        return readonly(state);
    }
};

export default EventBus;
