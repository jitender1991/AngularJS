	'use strict';
define(['angular','angularRoute','servicemodule','controllers','firstScreen','aboutController','homeController','helpController','bbbbController','ccccController','myprovider1','myprovider2','myservice1','myservice2','myfactory1','myfactory2','myconstant1','myconstant2','myvalue1','myvalue2'],function(angular,angularRoute,servicemodule,controllers,firstScreen,aboutController,homeController,helpController,bbbbController,ccccController,myprovider1,myprovider2,myservice1,myservice2,myfactory1,myfactory2,myconstant1,myconstant2,myvalue1,myvalue2){
	
	var app = angular.module('app',['controllers','ngRoute','servicemodule']);
	
	app.config(['$routeProvider','provider1Provider' ,
			function($routeProvider,provider1Provider){
				$routeProvider.
					when('/',{ 
						templateUrl : 'templates/home.html'  , 
						controller:'homeController'
					})
					.when('/help/:param',{
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
				provider1Provider.config_var ='config_var changed in config fucntion';

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