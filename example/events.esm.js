
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function checkListener(listener) {
    const listenerType = typeof listener;
    if (listenerType !== 'function') {
        throw new TypeError(`The "listener" argument must be of type Function. Received type ${listenerType}`);
    }
}
class Events {
    constructor() {
        this._events = {};
    }
    on(eventName, listener, prepend = false) {
        checkListener(listener);
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        const listeners = this._events[eventName];
        if (prepend) {
            listeners.unshift(listener);
        }
        else {
            listeners.push(listener);
        }
        return this;
    }
    off(eventName, listener) {
        const listeners = this._events[eventName];
        if (!listeners)
            return this;
        if (listener) {
            checkListener(listener);
            this._events[eventName] = listeners.filter((currentListener) => {
                return currentListener !== listener;
            });
        }
        else {
            this._events[eventName] = [];
        }
        return this;
    }
    once(eventName, listener, prepend = false) {
        checkListener(listener);
        const proxyListener = (...args) => {
            this.off(eventName, proxyListener);
            listener.apply(this, args);
        };
        return this.on(eventName, proxyListener, prepend);
    }
    emit(eventName, ...args) {
        const listeners = this._events[eventName];
        if (!listeners || !listeners.length) {
            return false;
        }
        listeners.forEach((listener) => {
            listener.apply(this, args);
        });
        return true;
    }
}

export { Events as default };
//# sourceMappingURL=events.esm.js.map
