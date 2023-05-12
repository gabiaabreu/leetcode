/* 1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, append the additional letters onto the end 
of the merged string.

Return the merged string. */

// FIRST ATTEMPT

function mergeAlternately(word1, word2) {
    let firstWord = word1.split('');
    let secondWord = word2.split('');

    let merged = [];

    let isFirstWordLonger = firstWord.length > secondWord.length;
    let isSecondWordLonger = secondWord.length > firstWord.length;

    if (isFirstWordLonger) {
        for (let i = 0; i < secondWord.length; i++) {
            merged.push(firstWord[i]);
            merged.push(secondWord[i]);
        }
        for (let i = secondWord.length; i < firstWord.length; i++) {
            merged.push(firstWord[i]);
        }
    } else if (isSecondWordLonger) {
        for (let i = 0; i < firstWord.length; i++) {
            merged.push(firstWord[i]);
            merged.push(secondWord[i]);
        }
        for (let i = firstWord.length; i < secondWord.length; i++) {
            merged.push(secondWord[i]);
        }
    } else {
        for (let i = 0; i < firstWord.length; i++) {
            merged.push(firstWord[i]);
            merged.push(secondWord[i]);
        }
    }

    let stringResult = String(merged);
    let resultModified = stringResult.replaceAll(',', '');
    return resultModified;
};