function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(3000).then((item) => {

})

async function test() {
    await sleep(3000);
}