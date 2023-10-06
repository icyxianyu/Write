// 最长递增序列 给定数组，找出最长递增序列
//例如：输入[1,2,5,3,7,4,6]，输出[1,2,3,4,6]，长度为5
// 思路：动态规划，dp[i]表示以i结尾的最长递增序列的长度

function findMaxArr(arr) { // 输出最长递增序列的数组
    let dp = [];
    dp[0] = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = [];
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i].length < dp[j].length + 1) {
                dp[i] = [...dp[j], arr[i]];
            }
        }
        if (dp[i].length === 0) {
            dp[i].push(arr[i]);
        }
    }
    let max = dp[0];
    for (let i = 1; i < dp.length; i++) {
        if (dp[i].length > max.length) {
            max = dp[i];
        }
    }
    return max;
}

console.log(findMaxArr([3, 2, 5, 3, 7, 4, 6]))