let Soundfont = require('soundfont-player'),
    mouseController = require('./lib/mouse-controller');

function init(config) {
    let ctx = new AudioContext();
    let soundfont = new Soundfont(ctx);
    let instrument = soundfont.instrument('orchestral_harp');

    let mouse = mouseController.create(config.container).init(); 

    instrument.onready(() => {
        mouse
            .getEmitter()
            .on('note-on', note => instrument.play(note, 0, -1));
    });
}

module.exports = {
    init: init
};

