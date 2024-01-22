import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership.js";

describe("Given customersBelongToMembershipt function", () => {
  test("when reciving COUNTRIES array, should return :[{ name: 'Foo', member: true }, { name: 'Fizz', member: true }, { name: 'FizzBuzz', member: true }] ", () => {
    // arrange ->
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    // act ->
    const EXPECTED_RESULT = customersWhoBelongToMembership(CUSTOMERS);

    // assert ->
    expect(EXPECTED_RESULT).toBeDefined();
    expect(EXPECTED_RESULT).toEqual([
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ]);
  });
});
