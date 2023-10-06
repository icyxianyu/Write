// 本质上是通过将对应的方法放入队列中，然后通过next方法依次执行队列中的方法
// 在第一次调用的时候全部方法就已经放入队列中了，只是通过setTimeout将next方法放入宏任务队列中，等待主线程执行完毕后执行

class LazyMan {
    constructor() {
        this.taskList = [];
        setTimeout(() => {
            this.next();
        }, 0);
    }

    next() {
        console.log(this.taskList)
        const fn = this.taskList.shift();
        fn && fn();
    }

    eat(food) {
        const fn = () => {
            console.log(`吃了${food}`)
            this.next();
        }
        this.taskList.push(fn);
        return this;
    }

    sleep(time) {
        const fn = () => {
            setTimeout(() => {
                console.log(`睡了${time}秒`)
                this.next();
            }, time)
        }

        this.taskList.push(fn);
        return this;
    }
}


const test = new LazyMan()

test.eat('apple').sleep(3000).eat('banana').sleep(3000).eat('pear')