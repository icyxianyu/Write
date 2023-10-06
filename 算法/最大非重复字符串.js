// 最大非重复字符串

function test(arr) {
    let maxStr = '';
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
        } else {
            const tempArr = [...set].join('');
            if (tempArr.length > maxStr.length) {
                maxStr = tempArr;
            }
            set.clear();
            set.add(arr[i]);
        }
    }
    return maxStr;
}

console.log(test('aabcdabcbb'));