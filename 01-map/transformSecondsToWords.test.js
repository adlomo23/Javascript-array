import { transformSecondsToWords } from "./transformSecondsToWords";

describe("Given transformSecondsToWords function", () => {
  test("it should return the same numbers but in strings", () => {
    //arrange
    const SECONDS = [2, 5, 100];

    //act
    const EXPECTED_RESULT = transformSecondsToWords(SECONDS);

    //assert
    expect(EXPECTED_RESULT).toEqual(["2", "5", "100"]);
  });
});
