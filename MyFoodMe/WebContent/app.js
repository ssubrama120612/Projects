var app = angular.module('foodmeapp', [ 'ui.router' ]);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url : '/',
		templateUrl : 'views/home.html'
	});

	$stateProvider.state('who', {
		url : '/who',
		template : 'Who we are'
	});

	$stateProvider.state('how', {
		url : '/how',
		template : 'How it works'
	});

	$stateProvider.state('help', {
		url : '/help',
		template : 'Help'
	});

	$stateProvider.state('customer', {
		url : '/customer',
		templateUrl : 'views/customer.html'
	});

	$stateProvider.state('restraunt', {
		
		url : '/restraunt',
		templateUrl : 'views/restaurentdetail.html'
	});

	$urlRouterProvider.otherwise('/');
});