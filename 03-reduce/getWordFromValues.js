/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

export const getWordFromValues = (values) => {
  const result = values.reduce((accumulator, number) => {
    return accumulator + number;
  }, "");
  return result;
};
