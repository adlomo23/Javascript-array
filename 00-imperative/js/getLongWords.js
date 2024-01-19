/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const getLongWords = (words) => {
  let longWords = [];

  for (let index = 0; index < words.length; index++) {
    if (words[index].length >= 5) {
      longWords.push(words[index]);
    }
  }

  return longWords;
};
//