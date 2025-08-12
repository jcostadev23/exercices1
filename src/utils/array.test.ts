import { uniqueNumbers } from "./array";

describe(uniqueNumbers, () => {
  it("Should return empty array if no numbers", () => {
    expect(uniqueNumbers([])).toEqual([]);
  });

  it("Should return unique numbers", () => {
    expect(uniqueNumbers([1, 2, 3, 4, 2, 3, 5, 0])).toEqual([1, 4, 5, 0]);
  });
});
