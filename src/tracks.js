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
        cover: require('@/assets/album-art/9e8e9e.png'),
        type: 'original'
    },
    {
        id: 3,
        title: 'jazz.wav',
        artist: 'htrap',
        filename: 'bday.wav',
        cover: require('@/assets/album-art/520b22.png'),
        type: 'original'
    },
    {
        id: 4,
        title: 'synthpop.wav',
        artist: 'htrap',
        filename: 'synthpop.wav',
        cover: require('@/assets/album-art/520b51.png'),
        type: 'original'
    },
    {
        id: 5,
        title: 'janglebop.wav',
        artist: 'htrap',
        filename: 'janglebop.wav',
        cover: require('@/assets/album-art/f095f0.png'),
        type: 'original'
    },
    {
        id: 6,
        title: 'wavy.wav',
        artist: 'htrap',
        filename: 'wavyexport.wav',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 7,
        title: 'chronic.wav (playboi carti remix)',
        artist: 'htrap',
        filename: 'chronic.wav',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 8,
        title: 'ports.wav (playboi carti remix)',
        artist: 'htrap',
        filename: 'ports.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 9,
        title: 'mountain dew.wav (lil dicky remix)',
        artist: 'htrap',
        filename: 'mountainDew.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    }

    // ... Add more tracks as needed
];

// Export a function that returns file source given a filename
function getTrackSource(filename) {
    // Extract the file extension from the filename
    filename.split('.').pop().toLowerCase();
// Adjust the regular expression to match both .wav and .mp3 files
    const tracks = require.context('@/assets/tracks/', false, /\.(wav|mp3)$/);
    return tracks('./' + filename);
}

export { trackData, getTrackSource };
