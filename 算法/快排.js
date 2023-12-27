function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const value = arr[0];

    const left = [];
    const right = [];

    for(let i =1;i<arr.length;i++){
        if(arr[i]>value){
            right.push(arr[i])
        }else{
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat(value,quickSort(right))
}

console.log(quickSort([1,4,5,66,2,3,5,6]))