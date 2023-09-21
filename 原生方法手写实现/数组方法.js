Array.prototype.reduce = function (callback, init) {
    let arr = this;
    let ans = init;
    for (const p of arr) {
        ans = callback(ans, p);
    }
    return ans;
}

Array.prototype.flat = function (depth = 1) {
    if (depth < 1) return this.slice();
    return this.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return [...pre, ...cur.flat(depth - 1)];
        } else {
            return [...pre, cur];
        }
    }, [])
}
let arr = [1, 2, 3, 4, 5, [10, 15, [10]]];

// console.log(arr.reduce((pre, cur) => {
//     return pre + cur;
// }, 0));

console.log(arr.flat())