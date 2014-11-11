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
		'servicemodule' : 'Services/servicemodule' ,
		'myprovider1' : 'Services/myprovider1',
		'myprovider2' : 'Services/myprovider2',
		'myservice1' : 'Services/myservice1',
		'myservice2' : 'Services/myservice2',
		'myfactory1' : 'Services/myfactory1',
		'myfactory2' : 'Services/myfactory2',
		'myconstant1' : 'Services/myconstant1',
		'myconstant2' : 'Services/myconstant2',
		'myvalue1' : 'Services/myvalue1',
		'myvalue2' : 'Services/myvalue2'
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