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
        title: 'frantic antics',
        artist: 'htrap',
        filename: 'funkjam.wav',
        cover: require('@/assets/album-art/9e8e9e.png'),
        type: 'original'
    },
    {
        id: 3,
        title: 'all over again (demo loop)',
        artist: 'htrap',
        filename: 'bday.wav',
        cover: require('@/assets/album-art/520b22.png'),
        type: 'original'
    },
    {
        id: 4,
        title: 'beach business',
        artist: 'htrap',
        filename: 'synthpop.wav',
        cover: require('@/assets/album-art/520b51.png'),
        type: 'original'
    },
    {
        id: 5,
        title: 'the role of dice',
        artist: 'htrap',
        filename: 'janglebop.wav',
        cover: require('@/assets/album-art/f095f0.png'),
        type: 'original'
    },
    {
        id: 6,
        title: 'acoustic bass for lunch',
        artist: 'htrap',
        filename: 'wavyexport.wav',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 7,
        title: 'chronic.wav ("asthma" - playboi carti remix)',
        artist: 'htrap',
        filename: 'chronic.wav',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 8,
        title: 'old ports ["teen x" - playboi carti remix (carti verse only)]',
        artist: 'htrap',
        filename: 'ports.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 9,
        title: 'mountain dew (dave season 2 - lil dicky lofi hiphop remix demo)',
        artist: 'htrap',
        filename: 'mountainDew.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 10,
        title: 'underwater summer',
        artist: 'htrap',
        filename: 'summer.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 11,
        title: 'fresh coats of pain',
        artist: 'htrap',
        filename: 'freshCoatsOfPain.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 12,
        title: 'chose ["bikini bottom" - ice spice (verse one remix)]',
        artist: 'htrap',
        filename: 'chose.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 13,
        title: 'spycraft (not playboi carti or pierre bourne type beat)',
        artist: 'htrap',
        filename: 'spycraft.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 14,
        title: 'red sprite ("cancun" - playboi carti remake)',
        artist: 'htrap',
        filename: 'sprite.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 15,
        title: 'a shaky lead',
        artist: 'htrap',
        filename: 'lead.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 16,
        title: 'nautilus ("what\'s next" - drake remake)',
        artist: 'htrap',
        filename: 'nautilus.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 17,
        title: 'retale value',
        artist: 'htrap',
        filename: 'retale.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
    },
    {
        id: 18,
        title: 'freefall ("falling down" - @GadManDubs remix)',
        artist: 'htrap',
        filename: 'freefall.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'remix'
    },
    {
        id: 19,
        title: 'grocery',
        artist: 'htrap',
        filename: 'grocery.mp3',
        cover: require('@/assets/album-art/ffffff.png'),
        type: 'original'
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
