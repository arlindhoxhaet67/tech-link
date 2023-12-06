// filename: complexCode.js

// This complex code demonstrates an implementation of a dynamic programming algorithm 
// to solve the longest common subsequence problem between two strings.
// It utilizes memoization and recursion to achieve a more efficient solution.

function longestCommonSubsequence(str1, str2) {
  const memo = {};

  function lcsHelper(i, j) {
    if (i === 0 || j === 0) {
      return 0;
    }

    const memoKey = `${i}-${j}`;
    if (memo[memoKey]) {
      return memo[memoKey];
    }

    let result;
    if (str1[i - 1] === str2[j - 1]) {
      result = 1 + lcsHelper(i - 1, j - 1);
    } else {
      const subResult1 = lcsHelper(i - 1, j);
      const subResult2 = lcsHelper(i, j - 1);
      result = Math.max(subResult1, subResult2);
    }

    memo[memoKey] = result;
    return result;
  }

  return lcsHelper(str1.length, str2.length);
}

const string1 = "ABCDGH";
const string2 = "AEDFHR";
const lcsLength = longestCommonSubsequence(string1, string2);
console.log(`Longest Common Subsequence Length: ${lcsLength}`);

const string3 = "AGGTAB";
const string4 = "GXTXAYB";
const lcsLength2 = longestCommonSubsequence(string3, string4);
console.log(`Longest Common Subsequence Length: ${lcsLength2}`);
// End of complexCode.js