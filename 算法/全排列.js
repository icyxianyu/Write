function getPermutation(arr) {
    const result = [];
    if (arr.length === 1) {
        return [arr];
    } else {
        for (let i = 0; i < arr.length; i++) {
            const temp = arr.slice()
            temp.splice(i, 1);
            const res = getPermutation(temp);
            res.forEach(item => {
                result.push([arr[i], ...item]);
            })
        }
    }
    return result;
}

console.log(getPermutation([1, 2, 3, 4]));