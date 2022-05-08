const { sonarSlider } = require("../sonarslider.js");
const fs = require("fs");

describe("Sonar Window slider tests on smaller test data set", () => {
  test("returns a number", () => {
    const data = fs.readFileSync("data/testData.txt", "utf8");
    expect(typeof sonarSlider(data)).toBe("number");
  });
  test("returns 0 if a single digit string is passed through", () => {
    expect(sonarSlider("0")).toBe(0);
  });
  test("returns 0 if a two digit string is passed through", () => {
    expect(sonarSlider("0\n1")).toBe(0);
  });
  test("returns 0 if a 3-digit string is passed through, which is a full sonar slider window", () => {
    expect(sonarSlider("0\n1\n2")).toBe(0);
  });
  test("returns 1 if 2 sonar slider windows are passed through (6 digit string)", () => {
    expect(sonarSlider("0\n1\n2\n3")).toBe(1);
  });
  test("returns the final number of increases, should be 5", () => {
    const data = fs.readFileSync("data/testData.txt", "utf8");
    expect(sonarSlider(data)).toBe(5);
  });
});

describe("Sonar Window slider tests on larger full test data set", () => {
  test("returns a number", () => {
    const data = fs.readFileSync("data/fullData.txt", "utf8");
    expect(typeof sonarSlider(data)).toBe("number");
  });
  test("returns the final number of increases, should be 1130", () => {
    const data = fs.readFileSync("data/fullData.txt", "utf8");
    expect(sonarSlider(data)).toBe(1130);
  });
});
