	'use strict';
define(['angular','angularRoute','controllers','firstScreen','aboutController','homeController','helpController','bbbbController','ccccController'],function(angular,angularRoute,controllers,firstScreen,aboutController,homeController,helpController,bbbbController,ccccController){
	
	var app = angular.module('app',['controllers','ngRoute']);
	
	app.config(['$routeProvider', 
			function($routeProvider){
				$routeProvider.
					when('/',{ 
						templateUrl : 'templates/home.html'  , 
						controller:'homeController'
					})
					.when('/help',{
						templateUrl : 'templates/help.html'  ,
						controller:'helpController'
					})
					.when('/aboutus',{
						templateUrl : 'templates/about.html' ,
						controller:'aboutController'
					})
					.when('/bbbb',{
						templateUrl :  'templates/bbbb.html' 
						,controller:'bbbbController'
					})
					.when('/cccc',{templateUrl : 'templates/cccc.html'  
						, controller:'ccccController'
					})
					.otherwise({ redirectTo: '/' 
					});
			}
	]);

	app.init = function(){
		
		var root = document.getElementsByClassName('myapp');
		angular.element(document).ready(function(){
			angular.bootstrap(root,['app']);
		});

	}
	
	return app;
});