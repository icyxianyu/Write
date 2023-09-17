// 打家劫舍1

function rob(nums){
    let dp = [];
    dp[0] = 0; dp[1] = nums[0]; //没有抢/抢了第一天
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
        //每次记录当前为前置的总和  与 再前一间前置中和加上当前间  的  最大值
    }
    return dp[nums.length]
};

// 打家劫舍2
// 首尾相连的房屋  不能同时抢劫
function rob(nums) {
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    } else {
        return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1))
    }

    function robRange(bef, aft) {
        let first = nums[bef]; let second = Math.max(nums[bef], nums[bef + 1]);
        for (let i = bef + 2; i <= aft; i++) {
            let temp = second;
            second = Math.max(second,first+nums[i]);
            first = temp;
        }
        return second
    }
};