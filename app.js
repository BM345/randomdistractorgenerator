var app = angular.module("RandomDistractorGenerator", []);

app.controller("MainController", ["$scope", function MainController($scope) {

  $scope.value = "10 m/s";
  $scope.spread = 0.5;
  $scope.numberOfDistractors = 4;

  $scope.distractors = [];


  $scope.randomNumberAroundValue = function(value, spread) {

    var absoluteSpread = value * spread;

    return value + 2 * absoluteSpread * Math.random() - absoluteSpread;


  }

  $scope.splitValueIntoNumberAndUnits = function(value) {

    var splitPoint = -1;
    var s = value.toString();

    for (var i = 0; i < s.length; i++) {
      c = s[i];
      if ("0123456789.".indexOf(c) == -1) {
        splitPoint = i;
        break;
      }
    }

    console.log(splitPoint);

    return [s.slice(0, splitPoint), s.slice(splitPoint)];



  }

  $scope.getNumberOfSignificantFigures = function(number) {

    var n = 0;
    var h = false;
    var hasHadPoint = false;
    var s = number.toString();

    for (var i = 0; i < s.length; i++) {
      var c = s[i];

      if (h == false) {
        if ("123456789".indexOf(c) != -1) {
          h = true;
        } else {
          continue;
        }
      }
      if (h == true) {
        if (".".indexOf(c) == -1) {
          n++;
        }

      }
    }

    return n;

  }


  $scope.generateDistractors = function() {

    var value2 = $scope.splitValueIntoNumberAndUnits($scope.value);
    var v = parseFloat(value2[0])
    var sf = parseInt($scope.getNumberOfSignificantFigures(value2[0].toString()));

    $scope.distractors = [];

    for (var i = 0; i < $scope.numberOfDistractors; i++) {

      $scope.distractors.push({
        "i": i,
        "value": $scope.randomNumberAroundValue(v, $scope.spread).toPrecision(sf) + value2[1]
      });
    }


  }

}]);