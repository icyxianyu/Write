Array.prototype.reduce = function (callback, init) {
    let arr = this;
    let ans = init;
    for (const p of arr) {
        ans = callback(p, ans);
    }
    return ans;
}

Array.prototype.flat = function (depth = 1) {
    if (depth < 1) return this.slice();
    const ans = [];
    for (const p of this) {
        if (Array.isArray(p)) {
            ans.push(...p.flat(depth - 1))
        } else {
            ans.push(p)
        }
    }
    return ans;
}
let arr = [1, 2, 3, 4, 5, [10, 15, [10]]];

// console.log(arr.reduce((pre, cur) => {
//     return pre + cur;
// }, 0));

console.log(arr.flat())