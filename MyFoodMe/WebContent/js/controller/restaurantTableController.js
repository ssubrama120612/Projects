app.controller('restaurantTableController', function($scope, foodfactory) {
	$scope.restaurants = foodfactory.getRestaurants();
});