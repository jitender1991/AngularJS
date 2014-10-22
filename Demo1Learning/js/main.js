'use strict';
require.config({
	paths:{
		'angular' :'../lib/angular' ,
		'app' :'app'
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

require(['angular','app'],function(angular , app){
	var root = document.getElementsByClassName('myapp');
	angular.element(document).ready(function(){
		angular.bootstrap(root,['app']);
	});
	var color = "sdfgsgsg'"

});