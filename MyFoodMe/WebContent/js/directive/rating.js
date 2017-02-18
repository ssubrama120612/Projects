app.directive('rating', function() {
	return {
		restrict : 'E',
		templateUrl : 'views/rating.html'
	};
});

app.directive('price', function() {
	return {
		restrict : 'E',
		templateUrl : 'views/price.html'
	};
});

app.directive('restaurent', function($state) {
	return {
		restrict : 'EA',
		templateUrl : 'views/restaurent.html',
		scope : {
			details : '=restaurent'
		},
		link : function(scope, element, attrs) {
			scope.imglocation = 'img/restaurants/' + scope.details.id + '.jpg';
			scope.navigate = function() {
				$state.go('restraunt');//' + scope.details.id);
			};
		}
	};
});