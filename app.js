
 var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/Assignment1", {
    templateUrl : "Assignment1.html"
    })
     .when("/Assignment2", {
    templateUrl : "Assignment2.html",
    controller:"Assignment2Controller"
     })
    .when("/Assignment3", {
    templateUrl : "Assignment3.html",
    controller:"Assignment3Controller"

     })
   .when("/Assignment4", {
        templateUrl : "Assignment4.html"
     })
    .when("/Assignment5", {
       templateUrl : "Assignment5.html",
       controller:"Assignment5Controller"
     })
   .when("/Assignment6", {
         templateUrl : "Assignment6.html",
         controller:"Assignment6Controller"

     })
.otherwise({
redirectTo: '/Assignment1'
})
 });


