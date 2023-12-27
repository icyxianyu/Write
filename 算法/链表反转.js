const a = {
    value:'a',
    next:{
        value:'b',
        next:{
            value:'c',
            next:{
                value:"d",
                next:null
            }
        }
    }
}

function reaver(obj){
    if(!obj) return null;
    let pre = null;
    let next = null;
    while(obj){
        next = obj.next;
        obj.next = pre;
        pre = obj;
        obj = next;
    }
    return pre;
}

console.log(reaver(a))