function isAnyOf(character, characterSet) {
  return characterSet.indexOf(character) >= 0;
}

function getNumberOfSignificantFigures(value) {
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

  if (deferredN > 0) {
    n += deferredN;
  }

  return n;
}

module.exports = getNumberOfSignificantFigures;