const CHROMATIC = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5'];

function getNoteFromPercent(percent) {
    return CHROMATIC[Math.floor(CHROMATIC.length * (percent - 0.00001))];
}

module.exports = {
    getNoteFromPercent: getNoteFromPercent
};

