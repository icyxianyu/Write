class EventBus {
    constructor() {
        this.event = {}
    }

    on(name, fn) {
        this.event[name] ? this.event[name].push(fn) : this.event[name] = [fn]
    }

    emit(name, ...args) {
        this.event[name] && this.event[name].forEach(fn => fn(...args))
    }

    off(name, fn) {
        this.event[name] && this.event[name].filter(item => item !== fn);
    }

    once(name, fn) {
        const temp = (...arg) => {
            fn(...arg);
            this.off(name, fn);
        }
        this.on(name, temp);
    }

 }