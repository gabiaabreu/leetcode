/* 1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, append the additional letters onto the end 
of the merged string.

Return the merged string. */

// MY SOLUTION

function mergeAlternately(word1, word2) {
  let merged = [];
  let longerWord = word1.length > word2.length ? word1 : word2;
  // I could've also done that with Math.max function (returns the highest number)

  for (let i = 0; i < longerWord.length; i++) {
    word1[i] && merged.push(word1[i]);
    word2[i] && merged.push(word2[i]);
  }

  let stringResult = String(merged);
  let resultModified = stringResult.replaceAll(",", "");
  /* that could've been simplified by using merged.join("") -> it joins array 
  members, the ("") means the join is made without a character in the middle.
  if it was join("-") the final strig would be something like "a-b-c-d" */

  return resultModified;
}
