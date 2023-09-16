function rob(nums){
    let dp = [];
    dp[0] = 0; dp[1] = nums[0]; //没有抢/抢了第一天
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
        //每次记录当前为前置的总和  与 再前一间前置中和加上当前间  的  最大值
    }
    return dp[nums.length]
};