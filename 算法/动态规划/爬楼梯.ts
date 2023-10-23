// https://leetcode-cn.com/problems/climbing-stairs/
// 动态规划

function climbStairs(n: number): number {
    if (n <= 2)
        return n;
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};