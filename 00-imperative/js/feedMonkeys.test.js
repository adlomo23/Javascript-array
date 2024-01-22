import { feedMonkeys } from "./feedMonkeys";

describe("Given function feedMonkeys", () => {
  test("it should return an array where each monkey has one banana", () => {
    //arrange ->
    const fruit = "🍌";

    //act ->
    const bananaResult = feedMonkeys(fruit);

    //assert ->
    expect(bananaResult).toEqual(["🐒 🍌", "🦍 🍌", "🦧 🍌"]);
  });

  test("it should return an array where each monkey has one apple", () => {
    //arrange ->
    const fruit = "🍎";

    //act ->
    const appleResult = feedMonkeys(fruit);

    //assert ->
    expect(appleResult).toEqual(["🐒 🍎", "🦍 🍎", "🦧 🍎"]);
  });
});
//
