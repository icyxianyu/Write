Promise.prototype.race = function (arr) {
    return new Promise((resolve, reject) => {
        for (const p of arr) {
            p.then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        }
    })
}

Promise.prototype.allSettled = function (arr) {
    return new Promise((resolve, reject) => {
        const ans = [];
        for (const p of arr) {
            p.then(res => {
                ans.push({
                    status: 'fulfilled',
                    value: res
                });
            }).catch(err => {
                ans.push({
                    status: 'rejected',
                    reason: err
                });
            });
        }
    })
}

Promise.prototype.any = function (arr) {
    return new Promise((resolve, reject) => {
        const ans = [];
        for (const p of arr) {
            p.then(res => {
                resolve(res);
            }).catch(err => {
                ans.push(err);
            });
        }
        reject(ans);
    })
}

Promise.prototype.all = function (arr) {
    return new Promise((resolve, reject) => {
        const ans = [];
        for (const p of arr) {
            p.then(res => {
                ans.push(res);
            }).catch(err => {
                reject(err);
            });
        }
        resolve(ans);
    })
}
