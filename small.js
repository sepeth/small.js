function asArray(obj) {
    return Array.prototype.slice.call(obj);
}

function $el(id) {
    return document.getElementById(id);
}

function $$(selector) {
    return document.querySelector(selector);
}

function $cls(klass) {
    return asArray(document.getElementsByClassName(klass));
}

function $tag(tag) {
    return asArray(document.getElementsByTagName(tag));
}

function $all(selector) {
    return asArray(document.querySelectorAll(selector));
}