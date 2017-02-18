'use strict';
foodMeApp.controller('MenuController', function MenuController($scope, $routeParams, Restaurant, cart) {
    angular.forEach(res, function (res) {
        if (res.id === $routeParams.restaurantId) {
            $scope.restaurant = res;
        }
    });
    //$scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
    $scope.cart = cart;
});
