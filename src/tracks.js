// src/tracks.js
const trackData = [
    {
        id: 1,
        title: 'daft.wav',
        artist: 'htrap',
        filename: 'daft.wav',
        // You can require cover images here as webpack processes them fine statically
        cover: require('@/assets/album-art.png'),
        type: 'original'
    },
    {
        id: 2,
        title: 'funkjam.wav',
        artist: 'htrap',
        filename: 'funkjam.wav',
        cover: require('@/assets/album-art.png'),
        type: 'original'
    },
    {
        id: 3,
        title: 'jazz.wav',
        artist: 'htrap',
        filename: 'bday.wav',
        cover: require('@/assets/album-art.png'),
        type: 'original'
    },
    {
        id: 4,
        title: 'synthpop.wav',
        artist: 'htrap',
        filename: 'synthpop.wav',
        cover: require('@/assets/album-art.png'),
        type: 'original'
    },
    {
        id: 5,
        title: 'janglebop.wav',
        artist: 'htrap',
        filename: 'janglebop.wav',
        cover: require('@/assets/album-art.png'),
        type: 'original'
    }
    // ... Add more tracks as needed
];

// Export a function that returns file source given a filename
function getTrackSource(filename) {
    const tracks = require.context('@/assets/tracks/', false, /\.wav$/);
    return tracks('./' + filename);
}

export { trackData, getTrackSource };
