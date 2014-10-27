'use strict';
require.config({
	paths:{
		'angular' :'lib/angular' ,
		'angularRoute' :'lib/angular-route',
		'app' :'app' ,
		'controllers' :'controllers/controllers' ,
		'firstScreen' : 'controllers/firstScreen',
		'homeController' : 'controllers/homeController',
		'helpController' : 'controllers/helpController',
		'aboutController' : 'controllers/aboutController',
		'bbbbController' : 'controllers/bbbbController',
		'ccccController' : 'controllers/ccccController',
	},
	shim :{
		'app' : { 
			deps:['angular']
		},
		"angular":{
			exports:"angular"
		}	
		
	}
});

require(['app'],function(app){

	app.init();


});