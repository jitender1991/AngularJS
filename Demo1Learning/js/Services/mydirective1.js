define(['directivemodule'],function(directivemodule){				
	directivemodule.directive('directive1',function(){
		var direcobj1 = {};
		directobj1.template  = '<div><li>one</li><br/><li>two</li><br/><li>three</li></div>';
		directobj1.restrict = 'E';
		directobj1.replace = 'false';
		direcobj1.link = function($scope,element,attrs){

		};
		return directobj1;
	});
});