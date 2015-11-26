module.exports = {
    getElementById: id => document.getElementById(id),
    addEventListener: (elem, event, cb) => elem.addEventListener(event, cb)
};

