var app = angular.module("RandomDistractorGenerator", []);

app.controller("MainController", ["$scope", function MainController($scope) {

  $scope.value = "123 m/s";
  $scope.spread = 0.2;
  $scope.numberOfDistractors = 4;
  $scope.guessedAtSignificantFigures = 1;

  $scope.distractors = [];
  $scope.copyText = "";

  $scope.randomNumberAroundValue = function(value, spread) {
    var absoluteSpread = value * spread;

    return value + 2 * absoluteSpread * Math.random() - absoluteSpread;
  }

  $scope.splitValueIntoNumberAndUnits = function(value) {
    var splitPoint = -1;
    var s = value.toString();

    for (var i = 0; i < s.length; i++) {
      var c = s[i];

      if ("0123456789.".indexOf(c) == -1) {
        splitPoint = i;
        break;
      }
    }

    return [s.slice(0, splitPoint), s.slice(splitPoint)];
  }

  $scope.getNumberOfSignificantFigures = function(value) {
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
        if ("123456789".indexOf(c) != -1) {
          significantFiguresHaveStarted = true;
        } else {
          continue;
        }
      }

      if (significantFiguresHaveStarted) {
        if ("123456789".indexOf(c) != -1) {
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

    return n;
  }

  $scope.generateDistractors = function() {

    var numberAndUnits = $scope.splitValueIntoNumberAndUnits($scope.value);
    var number = parseFloat(numberAndUnits[0]);
    var numberOfSignificantFigures = $scope.getNumberOfSignificantFigures(number);
    var units = numberAndUnits[1];

    $scope.guessedAtSignificantFigures = numberOfSignificantFigures;
    $scope.distractors = [];
    $scope.copyText = "";

    var i = 0;

    while ($scope.distractors.length < $scope.numberOfDistractors) {
      i++;

      var n1 = $scope.randomNumberAroundValue(number, $scope.spread).toPrecision(numberOfSignificantFigures);
      //  var n2 = numeral(n1);
      var distractor = n1.toString() + units;

      $scope.distractors.push({
        "i": i,
        "value": distractor
      });

      $scope.copyText += distractor + "\n";
    }
  }

  $scope.generateDistractors();

  new ClipboardJS(".copyButton");

}]);