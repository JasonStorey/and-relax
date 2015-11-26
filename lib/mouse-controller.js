let domUtils = require('./dom-utils'),
    EventEmitter = require('events').EventEmitter,
    notes = require('./notes');

function MouseController(container) {
    let mouseControllerInstance;

    let emitter;

    mouseControllerInstance = {
        init: () => {
            emitter = new EventEmitter(mouseControllerInstance);
            domUtils.addEventListener(container, 'click', event => {
                emitter.emit('note-on', notes.getNoteFromPercent(1 - (event.clientY / container.clientHeight)));
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

