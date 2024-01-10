/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

export const transformSecondsToWords = () => {
  const mapedArray = SECONDS.map((number) => {
    const currentNumber = number.toString();
    return currentNumber;
  });
  return mapedArray;
};
