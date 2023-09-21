// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

// 返回 合并后的字符串 。



// 示例 1：

// 输入：word1 = "abc", word2 = "pqr"
// 输出："apbqcr"
// 解释：字符串合并情况如下所示：
// word1：  a   b   c
// word2：    p   q   r
// 合并后：  a p b q c r


function mergeAlternately(word1: string, word2: string): string {
    let l1 = 0;
    let l2 = 0;
    let ans = "";
    while (l1 < word1.length && l2 < word2.length) {
        ans += (word1[l1] + word2[l2]);
        l1++;
        l2++;
    }
    ans += word1.slice(l1, word1.length)
    ans += word2.slice(l2, word2.length)

    return ans;
};