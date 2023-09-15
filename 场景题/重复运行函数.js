function repeat(fn, times, wait) {
    let time;

    function tempReturn(...args) {
        let index = 0;
        time = setInterval(() => {
            fn.call(this, ...args);
            index++;
            if (index === times) {
                clearInterval(time);
                return;
            }
        }, wait)
    }
    return tempReturn;
}

const repeatLog = repeat(console.log, 4, 3000)
repeatLog("helloworld") //每3秒打印一次helloworld，总计执行4次