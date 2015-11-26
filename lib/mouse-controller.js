let domUtils = require('./dom-utils'),
    EventEmitter = require('events').EventEmitter;

function MouseController(container) {
    let mouseControllerInstance;

    let emitter;

    let prevNote;

    mouseControllerInstance = {
        init: (notes) => {
            emitter = new EventEmitter(mouseControllerInstance);
            notes.init();
            domUtils.addEventListener(container, 'mousemove', event => {
                let noteToPlay = notes.getNoteFromPercent(1 - (event.clientY / container.clientHeight)); 
                if(noteToPlay === prevNote) {
                    return;
                }
                prevNote = noteToPlay;
                emitter.emit('note-on', noteToPlay);
            });
            return mouseControllerInstance;
        },
        getEmitter: () => emitter
    };

    return mouseControllerInstance;
}

module.exports = {
    create: container => MouseController(container) 
};

