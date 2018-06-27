class ScientificNumber {
  constructor(significand, base, exponent, units) {
    this.significand = significand;
    this.base = base;
    this.exponent = exponent;
    this.units = units;
  }

  toString() {
    if (this.base == 1 || this.exponent == 0) {
      return this.significand + " " + this.units;
    }

    return this.significand + " * " + this.base + "^" + this.exponent + " " + this.units;
  }

  toLaTeXString() {
    if (this.base == 1 || this.exponent == 0) {
      return this.significand + " " + this.units;
    }

    return this.significand + " \\times " + this.base + "^{" + this.exponent + "} " + this.units;
  }
}

function isAnyOf(character, characterSet) {
  return characterSet.indexOf(character) >= 0;
}

function getNumberOfSignificantFigures(value, assumeLowest) {
  var n = 0;
  var deferredN = 0;
  var significantFiguresHaveStarted = false;
  var haveHadDecimalPoint = false;
  var s = value.toString();

  for (var i = 0; i < s.length; i++) {
    var c = s[i];

    if (c == ".") {
      haveHadDecimalPoint = true;
      continue;
    }

    if (!significantFiguresHaveStarted) {
      if (isAnyOf(c, "123456789")) {
        significantFiguresHaveStarted = true;
      } else {
        continue;
      }
    }

    if (significantFiguresHaveStarted) {
      if (isAnyOf(c, "123456789")) {
        if (deferredN > 0) {
          n += deferredN;
          deferredN = 0;
        }
        n++;
      } else if (c == "0" && haveHadDecimalPoint) {
        if (deferredN > 0) {
          n += deferredN;
          deferredN = 0;
        }
        n++;
      } else if (c == "0" && !haveHadDecimalPoint) {
        deferredN++;
      }
    }
  }

  if (deferredN > 0 && !assumeLowest) {
    n += deferredN;
  }

  return n;
}

function splitValueIntoNumberAndUnits(value) {
  var splitPoint = -1;
  var s = value.toString();

  for (var i = 0; i < s.length; i++) {
    var c = s[i];

    if (!isAnyOf(c, "0123456789.")) {
      splitPoint = i;
      break;
    }
  }

  if (splitPoint == -1) {
    return [s, ""];
  }

  return [s.slice(0, splitPoint), s.slice(splitPoint)];
}

module.exports = {
  "getNumberOfSignificantFigures": getNumberOfSignificantFigures,
  "splitValueIntoNumberAndUnits": splitValueIntoNumberAndUnits
};