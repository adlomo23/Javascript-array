import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";
describe("Given NUMBERS array", () => {
  test("When reciving NUMBER, the return should be: 20", () => {
    //arrange
    const NUMBER = 5;

    //act
    const EXPECTED_RESULT = sumNumbersFromInitialValue(NUMBER);

    //asert
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual(20);
  });
});
//