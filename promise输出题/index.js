function test1() {
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 0);

    const interval = setInterval(() => {
        console.log(3);
    }, 0);

    setTimeout(() => {
        console.log(10);
        new Promise(function (resolve) {
                console.log(11);
                resolve();
            }).then(function () {
                console.log(12);
            })
            .then(function () {
                console.log(13);
                clearInterval(interval);
            })
    }, 0)

    Promise.resolve().then(() => {
            console.log(7)
        })
        .then(() => {
            console.log(8)
        })
}

// test1()  // 1 7 8 2 3 10 11 12 13