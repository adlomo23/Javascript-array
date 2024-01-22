import { getWordFromValues } from "./getWordFromValues.js";

describe("Given VALUES array", () => {
  test("When reciving VALUES array, the return should be: '123'", () => {
    //arrange
    const VALUES = [1, 2, 3];

    //act
    const EXPECTED_RESULT = getWordFromValues(VALUES);

    //asert
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual("123");
  });
});
