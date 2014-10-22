'use strict';
require.config({
	paths:{
		'angular' :'../lib/angular' ,
		'app' :'app' ,
		'firstScreen' : 'controllers/firstScreen'
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

require(['angular','app','firstScreen'],function(angular , app,firstScreen){
	var root = document.getElementsByClassName('myapp');
	angular.element(document).ready(function(){
		angular.bootstrap(root,['app']);
	});
});