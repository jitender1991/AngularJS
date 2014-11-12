define(['directivemodule'],function(directivemodule){				
	directivemodule.directive('directive1',function(){
		var directobj1 = {};
		//directobj1.template  = '<div><li>one</li><br/><li>two</li><br/><li>three</li></div>';
		directobj1.templateUrl = 'templates/directive1.html';
		directobj1.restrict = 'E';
		directobj1.replace = 'false';
		directobj1.scope = {
			color :'='
		};
		directobj1.compile = function(element,attrs){
			element.append('<li>this is appended text</li>');
			return{	
				pre :function( scope,element,attrs){
					scope.color='red'
					console.log('within pre function ---------');
				},
				post:function(scope,element,attrs){
					console.log('within post function----------');
						element.bind('click',function(){
							element.css({'background-color':'white'});
							scope.$apply(function(){
								scope.color = '';
							});
						});
						scope.$watch('color',function(){
							element.css({'background-color':scope.color});
						});
					}
				}


			}
		return directobj1;
	});
});