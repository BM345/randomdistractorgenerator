var app = angular.module("RandomDistractorGenerator", []);

app.controller("MainController", ["$scope", function MainController($scope) {

  $scope.value = "123 m/s";
  $scope.spread = 0.3;
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


  $scope.generateDistractors = function() {

    var numberAndUnits = $scope.splitValueIntoNumberAndUnits($scope.value);
    var number = parseFloat(numberAndUnits[0]);
    var numberOfSignificantFigures = getNumberOfSignificantFigures(number);
    var units = numberAndUnits[1];

    $scope.guessedAtSignificantFigures = numberOfSignificantFigures;
    $scope.distractors = [];
    $scope.copyText = "";

    var i = 0;

    while ($scope.distractors.length < $scope.numberOfDistractors) {
      i++;

      var n1 = parseFloat($scope.randomNumberAroundValue(number, $scope.spread).toPrecision(numberOfSignificantFigures));
      //  var n2 = numeral(n1);
      var distractor = n1.toString() + units;

      var isDuplicate = false;

      for (var j = 0; j < $scope.distractors.length; j++) {
        if ($scope.distractors[j].value == distractor) {
          isDuplicate = true;
        }
      }

      if (isDuplicate) {
        continue;
      }

      if (i > 10) {
        break;
      }

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