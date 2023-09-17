
// 深拷贝
function deepclone(origin) {
    if(typeof origin !== 'object' || origin === null){
        return origin;
    }
    if(Array.isArray(origin)){
        return origin.map(item => deepclone(item))
    }
    let target = {};

    for(const key in origin){
        if(origin.hasOwnProperty(key)){
            target[key] = deepclone(origin[key])
        }
    }
    return target;
}

// test
let obj = {a:1,b:function(){},c:[10,5,6,7,{c:1,d:2}],f:null};
console.log(deepclone(obj))