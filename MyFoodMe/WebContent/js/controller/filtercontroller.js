app.controller('filtercontroller', function($scope, foodfactory){
	$scope.cusines = foodfactory.getCusines();
});