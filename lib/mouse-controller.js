let domUtils = require('./dom-utils.js'),
    EventEmitter = require('events').EventEmitter;

function MouseController(container) {
    let mouseControllerInstance;

    let emitter;

    mouseControllerInstance = {
        init: () => {
            emitter = new EventEmitter(mouseControllerInstance);
            domUtils.addEventListener(container, 'click', event => {
                emitter.emit('note-on', 'C4');
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

