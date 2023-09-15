class Scheduler {
    constructor() {
        this.arr = [];
        this.index = 2;
        this.current = 0;
    }
    add(promiseCreator) {
        this.arr.push(promiseCreator);
        this.run();
    }
    async run() {
        if (this.current >= this.index) return;

        const fn = this.arr.shift();
        this.current++;

        if (!fn) return;
        await fn();
        this.current--;
        this.run();

    }
}
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})


const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}


addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");