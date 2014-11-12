define(['directivemodule'],function(directivemodule){				
	directivemodule.directive('directive1',function(){
		var directobj1 = {};
		//directobj1.template  = '<div><li>one</li><br/><li>two</li><br/><li>three</li></div>';
		//directobj1.templateUrl = 'templates/directive1.html';
		directobj1.restrict = 'E';
		directobj1.replace = 'false';
		directobj1.compile = function(element,attrs){
			alert('fhgdikl')
			return {
				pre :function($scope,element,attrs){
					console.log('prelink function---------');

				},
				post :function($scope,element,attrs){
					console.log('post function ------------');
				}
		};
		return directobj1;
	});
});