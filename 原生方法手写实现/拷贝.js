// 深拷贝
function deepclone(origin, map = new WeakMap()) {
    if (typeof origin !== 'object' || origin === null) {
        return origin;
    }
    if (map.get(origin)) {
        return map.get(origin)
    }
    if (Array.isArray(origin)) {
        return origin.map(item => deepclone(item, map))
    }
    if (origin instanceof Date) {
        return new Date(origin)
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin)
    }
    let target = {};
    for (const key in origin) {
        if (origin.hasOwnProperty(key)) {
            target[key] = deepclone(origin[key], map)
        }
    }
    return target;
}

// test
let obj = {
    a: 1,
    b: function () {},
    c: [10, 5, 6, 7, {
        c: 1,
        d: 2
    }],
    d: new Date(),
    f: null
};
console.log(deepclone(obj))