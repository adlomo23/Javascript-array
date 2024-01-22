import { mappedFeedMonkeys } from "./feedMonkeys";

describe("Given function feedMonkeys", () => {
  test("it should return an array where each monkey has one banana", () => {
    //arrange ->
    const fruit = "🍌";

    //act ->
    const bananaResult = mappedFeedMonkeys(fruit);

    //assert ->
    expect(bananaResult).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });

  test("it should return an array where each monkey has one apple", () => {
    //arrange ->
    const fruit = "🍎";

    //act ->
    const appleResult = mappedFeedMonkeys(fruit);

    //assert ->
    expect(appleResult).toEqual(["🐒 🍎", "🦍 🍎", "🦧 🍎"]);
  })
});
//