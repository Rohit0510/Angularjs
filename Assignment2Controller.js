
       var app = angular.module("myApp");  
        app.controller('Assignment2Controller', function($scope) {
            $scope.fact=1;
            $scope.zero=1;
            $scope.negative=-1;
            $scope.square = function() {
            $scope.result = $scope.number*$scope.number;
            }
            $scope.cube = function() {
            $scope.result = $scope.number*$scope.number*$scope.number;
            }
           $scope.factorial=function(){
                if($scope.number<0){
                    $scope.result=$scope.negative;
                }
                else if($scope.number==0)
                {
                    $scope.result=$scope.zero;
                }
            else{
              for($scope.i=1;$scope.i<=$scope.number;$scope.i++){
                  $scope.fact=$scope.fact*$scope.i;}
                  $scope.result=$scope.fact;
              
              }
                }

           });
