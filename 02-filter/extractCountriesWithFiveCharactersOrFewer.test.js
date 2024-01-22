import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer function", () => {
  test("when reciving COUNTRIES array, should return : ['Italy']", () => {
    // arrange ->
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];

    // act ->
    const EXPECTED_RESULT =
      extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    // assert ->
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual(["Italy"]);
  });
});
