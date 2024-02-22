// generateTracksJSON.js
const fs = require('fs');
const path = require('path');

const tracksFolder = path.resolve(__dirname, 'src/assets/tracks/');
const albumArtFolder = path.resolve(__dirname, 'src/assets/album-art/');

const trackData = [];

// Function to recursively read files from the tracks directory
function readFiles(directory) {
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            // If it's a directory, recursively read its files
            readFiles(filePath);
        } else if (file.endsWith('.wav')) {
            // If it's a .wav file, process it
            const strippedFilename = path.basename(file);
            const title = path.basename(strippedFilename, '.wav'); // Extract title from filename

            // Find corresponding album art filename
            const albumArtFilename = `${title}.png`;
            const albumArtPath = path.join(albumArtFolder, albumArtFilename);

            // Determine the type based on the parent directory
            const type = path.relative(tracksFolder, directory);

            // Push track data to the array
            trackData.push({
                id: trackData.length + 1,
                title: title,
                artist: 'htrap',
                filename: path.join(type, file), // Include subfolder in filename
                cover: albumArtPath, // Set album art path
                type: type // Set type property
            });
        }
    });
}

// Start reading files from the tracks directory
readFiles(tracksFolder);

// Write track data to a JSON file
fs.writeFileSync(path.resolve(__dirname, 'src/assets/tracks/tracks.json'), JSON.stringify(trackData, null, 2));

console.log('Track data generated successfully.');
// Run this script to generate the tracks.json file
