var app = angular.module("RandomDistractorGenerator", []);

app.controller("MainController", ["$scope", function MainController($scope){

$scope.value = "10 m/s";
$scope.spread = 0.2;
  $scope.distractors = ""


$scope.randomNumberAroundValue = function(value, spread){

var absoluteSpread = value * spread;

return value + 2 * absoluteSpread * Math.random() - absoluteSpread;


}

$scope.splitValueIntoNumberAndUnits = function(value){

var splitPoint = -1;
var s = value.toString();

for (var i = 0; i < s.length; i++){
  c = s[i];
  if ("0123456789.".indexOf(c) == -1)
  {
    splitPoint = i;
    break;
  }
}

console.log(splitPoint);

return [s.slice(0, splitPoint), s.slice( splitPoint)];



}

$scope.getNumberOfSignificantFigures = function(numberString){

var n = 0;
var h = false;

for (var i = 0; i < numberString.length; i++){
var c = numberString[i];

  if (h == false){
    if ("123456789".indexOf(c) != -1){
      h = true;
    }
    else{
      continue;
    }
  }
  if (h == true){
    if ( c != "."){
      n ++;
    }
  }
}

return n;

}

$scope.roundToNSignificantFigures = function (value, n) {
  var abs = Math.abs(value);
  var sign = Math.sign(value);
  var a = abs;
  var y = 0;


    while (a < 1){
      a = a * 10;
      y++;
    }

        while (a >= 10){
          a = a / 10;
          y--;
        }

        a = a * Math.pow(10, n);
        a = Math.round(a);
        a = a / Math.pow(10, n);
        a = a * Math.pow(10, -y);

        return sign *a;



}

  $scope.generateDistractors = function () {

var value2 = $scope.splitValueIntoNumberAndUnits($scope.value);

var sf = parseInt( $scope.getNumberOfSignificantFigures(value2[0].toString()));

$scope.distractors = $scope.roundToNSignificantFigures( $scope.randomNumberAroundValue(parseFloat( value2[0]), $scope.spread), sf) + value2[1];

  }

}]);
