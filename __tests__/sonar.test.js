const { sonarCalc } = require("../sonar");
const fs = require("fs");

describe("Sonar function tests with small test data set", () => {
  test("returns a number", () => {
    const data = fs.readFileSync("data/testData.txt", "utf8");
    expect(typeof sonarCalc(data)).toBe("number");
  });
  test("returns 0 when a single digit of 0 is passed through", () => {
    expect(sonarCalc("0")).toBe(0);
  });
  test("returns 1 when 2 string digits are passed through, where second digit is higher than the first", () => {
    expect(sonarCalc("0\n1")).toBe(1);
  });
  test("returns the final number of increases, should be 7", () => {
    const data = fs.readFileSync("data/testData.txt", "utf8");
    expect(sonarCalc(data)).toBe(7);
  });
});

describe("Sonar function tests with full test data set", () => {
  test("returns a number", () => {
    const data = fs.readFileSync("data/fullData.txt", "utf8");
    expect(typeof sonarCalc(data)).toBe("number");
  });
  test("returns the final number of increases, should be 1167", () => {
    const data = fs.readFileSync("data/fullData.txt", "utf8");
    expect(sonarCalc(data)).toBe(1167);
  });
});
