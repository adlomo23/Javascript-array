import { getEvensOnly } from "./getEvensOnly";

describe("Given getEvensOnly function", () => {
  test("when reciving COUNTRIES array, should return : [2,12,42,28]", () => {
    // arrange ->
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

    // act ->
    const EXPECTED_RESULT = getEvensOnly(COUNTERS);

    // assert ->
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual([2, 12, 42, 28]);
  });
});
