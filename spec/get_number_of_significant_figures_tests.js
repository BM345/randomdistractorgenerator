var getNumberOfSignificantFigures = require("../maths.js");

describe("The getNumberOfSignificantFigures() function", function() {

  it("returns 1 for '5'", function() {
    expect(getNumberOfSignificantFigures("5")).toBe(1);
  });

  it("returns 2 for '50'", function() {
    expect(getNumberOfSignificantFigures("50")).toBe(2);
  });

  it("returns 3 for '500'", function() {
    expect(getNumberOfSignificantFigures("500")).toBe(3);
  });

  it("returns 4 for '5000'", function() {
    expect(getNumberOfSignificantFigures("5000")).toBe(4);
  });

  it("returns 2 for '55'", function() {
    expect(getNumberOfSignificantFigures("55")).toBe(2);
  });

  it("returns 3 for '550'", function() {
    expect(getNumberOfSignificantFigures("550")).toBe(3);
  });

  it("returns 4 for '5500'", function() {
    expect(getNumberOfSignificantFigures("5500")).toBe(4);
  });

  it("returns 5 for '55000'", function() {
    expect(getNumberOfSignificantFigures("55000")).toBe(5);
  });

  it("returns 3 for '555'", function() {
    expect(getNumberOfSignificantFigures("555")).toBe(3);
  });

  it("returns 4 for '5550'", function() {
    expect(getNumberOfSignificantFigures("5550")).toBe(4);
  });

  it("returns 5 for '55500'", function() {
    expect(getNumberOfSignificantFigures("55500")).toBe(5);
  });

  it("returns 3 for '505'", function() {
    expect(getNumberOfSignificantFigures("505")).toBe(3);
  });

  it("returns 4 for '5055'", function() {
    expect(getNumberOfSignificantFigures("5055")).toBe(4);
  });

  it("returns 4 for '5050'", function() {
    expect(getNumberOfSignificantFigures("5050")).toBe(4);
  });

  it("returns 2 for '5.0'", function() {
    expect(getNumberOfSignificantFigures("5.0")).toBe(2);
  });

  it("returns 3 for '5.00'", function() {
    expect(getNumberOfSignificantFigures("5.00")).toBe(3);
  });

  it("returns 4 for '5.000'", function() {
    expect(getNumberOfSignificantFigures("5.000")).toBe(4);
  });

  it("returns 2 for '5.5'", function() {
    expect(getNumberOfSignificantFigures("5.5")).toBe(2);
  });

  it("returns 3 for '5.50'", function() {
    expect(getNumberOfSignificantFigures("5.50")).toBe(3);
  });

  it("returns 4 for '5.005'", function() {
    expect(getNumberOfSignificantFigures("5.005")).toBe(4);
  });

  it("returns 6 for '500.005'", function() {
    expect(getNumberOfSignificantFigures("500.005")).toBe(6);
  });

  it("returns 1 for '0.5'", function() {
    expect(getNumberOfSignificantFigures("0.5")).toBe(1);
  });

  it("returns 1 for '0.05'", function() {
    expect(getNumberOfSignificantFigures("0.05")).toBe(1);
  });

  it("returns 1 for '0.005'", function() {
    expect(getNumberOfSignificantFigures("0.005")).toBe(1);
  });

  it("returns 1 for '0.0005'", function() {
    expect(getNumberOfSignificantFigures("0.0005")).toBe(1);
  });

  it("returns 2 for '0.55'", function() {
    expect(getNumberOfSignificantFigures("0.55")).toBe(2);
  });

  it("returns 2 for '0.055'", function() {
    expect(getNumberOfSignificantFigures("0.055")).toBe(2);
  });

  it("returns 2 for '0.0055'", function() {
    expect(getNumberOfSignificantFigures("0.0055")).toBe(2);
  });

  it("returns 2 for '0.50'", function() {
    expect(getNumberOfSignificantFigures("0.50")).toBe(2);
  });

  it("returns 3 for '0.500'", function() {
    expect(getNumberOfSignificantFigures("0.500")).toBe(3);
  });

  it("returns 4 for '0.5000'", function() {
    expect(getNumberOfSignificantFigures("0.5000")).toBe(4);
  });

  it("returns 5 for '0.50005'", function() {
    expect(getNumberOfSignificantFigures("0.50005")).toBe(5);
  });

  it("returns 5 for '0.00050005'", function() {
    expect(getNumberOfSignificantFigures("0.00050005")).toBe(5);
  });

});