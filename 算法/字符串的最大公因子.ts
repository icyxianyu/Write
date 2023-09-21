// 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。



// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"
// 示例 2：

// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"
// 示例 3：

// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""


function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    function gcd(l, s) {
        let short;
        l > s ? short = s : short = l;
        while ((l % short !== 0 || s % short !== 0) && short > 0) {
            short--;
        }
        console.log(short, l, s)
        return short;
    }

    return str1.slice(0, gcd(str1.length, str2.length))
};