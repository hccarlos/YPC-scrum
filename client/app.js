// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.
var myApp = angular.module('Myapp', ['ngRoute']);
myApp.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
		.when('/upload', {
				templateUrl: '/partials/upload.html',
				controller: 'uploadController'
		})
		.when('/index', {
				templateUrl: '/partials/index.html',
				controller: 'indexController'
		})
    .otherwise({
        redirectTo: '/index'
    });
});
