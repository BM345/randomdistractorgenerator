var a = require("../maths.js");
var splitValueIntoNumberAndUnits = a["splitValueIntoNumberAndUnits"];


describe("The splitValueIntoNumberAndUnits() function", function() {

  it("", function() {
    expect(splitValueIntoNumberAndUnits("1 km")[0]).toBe("1");
    expect(splitValueIntoNumberAndUnits("1 km")[1]).toBe(" km");
  });

  it("", function() {
    expect(splitValueIntoNumberAndUnits("1km")[0]).toBe("1");
    expect(splitValueIntoNumberAndUnits("1km")[1]).toBe("km");
  });

  it("", function() {
    expect(splitValueIntoNumberAndUnits("1.0 km")[0]).toBe("1.0");
    expect(splitValueIntoNumberAndUnits("1.0 km")[1]).toBe(" km");
  });

  it("", function() {
    expect(splitValueIntoNumberAndUnits("1 m/s")[0]).toBe("1");
    expect(splitValueIntoNumberAndUnits("1 m/s")[1]).toBe(" m/s");
  });

  it("", function() {
    expect(splitValueIntoNumberAndUnits("123.456 m/s^2")[0]).toBe("123.456");
    expect(splitValueIntoNumberAndUnits("123.456 m/s^2")[1]).toBe(" m/s^2");
  });

});