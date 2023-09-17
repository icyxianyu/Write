// 节流函数

function throttle(fn, delay) {
    let timer = null;
    return () => {
        if (timer) {
            return;
        } else {
            timer = setTimeout(() => {
                fn();
                timer = null;
            }, delay)
        }
    }
}


// 防抖函数

function debounce(fn, delay) {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}
