import { uniqueNumbers } from "./array";

describe(uniqueNumbers, () => {
  it("Should return null if empty array", () => {
    expect(uniqueNumbers([])).toBeNull();
  });

  it("Should return NaN if not array of numbers", () => {
    expect(uniqueNumbers([null, undefined])).toBeNaN();
  });

  it("Should return unique numbers", () => {
    expect(uniqueNumbers([1, 2, 3, 4, 2, 3, 5, 0])).toEqual([1, 4, 5, 0]);
  });
});
