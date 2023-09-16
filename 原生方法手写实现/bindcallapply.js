Object.prototype.call = function (context, ...args) {
    context.func = this;
    context.func(...args);
    delete context.func;
    return context;
}

// 本质上是通过在希望传入的对象上挂载一个函数指向当前函数，然后执行这个函数，最后删除这个函数

Object.prototype.apply = function (context, args) {
    context.func = this;
    context.func(...args);
    delete context.func;
    return context;
}


Object.prototype.bind = function (context, ...args) {
    return (...reset) => this.call(context, ...reset, ...args);
}

// 简单版