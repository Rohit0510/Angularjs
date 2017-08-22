angular.module("myApp").controller('Assignment5Controller', function ($scope) {
        $scope.userArray = [];
    console.log($scope.userArray);
       $scope.submitForm = function () {
           	if ( $scope.userForm.$valid) {
				alert('you have successfully submitted the form');
                 $scope.userArray.push($scope.firstname);
                 $scope.userArray.push($scope.lastname);
                 $scope.userArray.push($scope.email);
                 $scope.userArray.push($scope.number);
                 $scope.userArray.push($scope.Gender);
                 $scope.userArray.push($scope.location);
                 
			}
        console.log($scope.userArray);
		};
        $scope.reset = function() {
        $scope.firstname = '';
        $scope.lastname='';
        $scope.email='';
        $scope.number='';
        $scope.Gender='';
        $scope.location='';
        $scope.userArray.pop($scope.firstname);
       $scope.userArray.pop($scope.lastname);
        $scope.userArray.pop($scope.email);
        $scope.userArray.pop($scope.number);
        $scope.userArray.pop($scope.Gender);
        $scope.userArray.pop($scope.location);
                 


        };
	});