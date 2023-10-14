// 原地删除数组中的所有值为 val 的元素，返回移除后数组的新长度。

function removeElement(nums, val) {
    let idx = 0;
    for (const p of nums) {
        if (p !== val) {
            nums[idx++] = p;
        }
    }
    return idx
};



// 删除有序数组中的重复项

var removeDuplicates = function (nums) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[slow] = nums[i]
            slow++;
        }
    }
    return slow
};