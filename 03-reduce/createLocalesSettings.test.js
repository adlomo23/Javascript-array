import { createLocalesSettings } from "./createLocalesSettings.js";

describe("Given LOCALES array", () => {
  test("When reciving LOCALES, EXPECTED_RESULT should be returned", () => {
    //arrange
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

    //act
    const EXPECTED_RESULT = createLocalesSettings(LOCALES);

    //asert
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual({
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    });
  });
});
