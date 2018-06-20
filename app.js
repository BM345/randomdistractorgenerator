var app = angular.module("RandomDistractorGenerator", []);

app.controller("MainController", ["$scope", function MainController($scope) {

  $scope.value = "100 m/s";
  $scope.spread = 0.5;
  $scope.numberOfDistractors = 4;

  $scope.distractors = [];

  $scope.randomNumberAroundValue = function(value, spread) {
    var absoluteSpread = value * spread;

    return value + 2 * absoluteSpread * Math.random() - absoluteSpread;
  }

  $scope.splitValueIntoNumberAndUnits = function(value) {
    var p = -1;
    var s = value.toString();

    for (var i = 0; i < s.length; i++) {
      var c = s[i];

      if ("0123456789.".indexOf(c) == -1) {
        p = i;
        break;
      }
    }

    return [s.slice(0, p), s.slice(p)];
  }

  $scope.getNumberOfSignificantFigures = function(value) {
    var n = 0;
    var significantFiguresHaveStarted = false;
    var haveHadDecimalPoint = false;
    var s = value.toString();

    for (var i = 0; i < s.length; i++) {
      var c = s[i];

      if (!significantFiguresHaveStarted) {
        if ("123456789".indexOf(c) != -1) {
          significantFiguresHaveStarted = true;
        } else {
          continue;
        }
      }

      if (significantFiguresHaveStarted) {
        if (".".indexOf(c) == -1) {
          n++;
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

    $scope.distractors = [];

    for (var i = 0; i < $scope.numberOfDistractors; i++) {
      var distractor = $scope.randomNumberAroundValue(number, $scope.spread).toPrecision(numberOfSignificantFigures) + units;

      $scope.distractors.push({
        "i": i,
        "value": distractor
      });
    }
  }

  $scope.generateDistractors();

}]);