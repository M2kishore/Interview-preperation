//https://leetcode.com/problems/reverse-words-in-a-string/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const text = s.trim();
  let primaryList = text.split(" ");
  let finalList = [];
  let i = 0;
  const arrLength = primaryList.length;
  for (i = arrLength - 1; i >= 0; i--) {
    if (primaryList[i] == "") {
      continue;
    } else {
      finalList.push(primaryList[i]);
    }
  }
  return finalList.join(" ");
};
