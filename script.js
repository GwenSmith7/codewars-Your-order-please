'use strict';

function order(words) {
  // is the input string empty? If so return empty string, otherwise split into substrings by space and sort
  return words.length === 0
    ? ''
    : words
        .split(' ')
        .sort((a, b) => {
          // identify number in string from 0-9 then re-join the substrings
          return Number(a.match(/\d/)) - Number(b.match(/\d/));
        })
        .join(' ');

  console.log(words);
}
