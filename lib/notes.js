const CHROMATIC = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5'];
const PENTATONIC = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'];

let selectedHarmony;

function init() {
    selectedHarmony = PENTATONIC;
}

function getNoteFromPercent(percent) {
    return selectedHarmony[Math.floor(selectedHarmony.length * (percent - 0.00001))];
}

module.exports = {
    init: init,
    getNumberOfNotes: () => selectedHarmony.length,
    getNoteFromPercent: getNoteFromPercent
};

