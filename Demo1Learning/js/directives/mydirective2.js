define(['directivemodule'],function(directivemodule){
	
		directivemodule.directive('directive2',function(){
			var directobj2 = { };
			directobj2.templateUrl ='templates/directive2.html';
			directobj2.restrict = 'E';
			directobj2.replace ='true';
			directobj2.require ='ngModel' ;
			//directobj2.scope = {};
			directobj2.compile = function(elem , attr){
				console.log('directive 2 compile---function');
				return {
					pre :function(scope,elem,attr,ngModelCtrl){
						console.log('prelink function directive 2');

					},
					post:function(scope,elem,attr,ngModelCtrl){
						console.log('post link function directive 2');
						
						multiplierTypes= ['seconds','minutes','hours','days'];
						multiplierMap = {seconds:1,minutes:60,hours:3600,days:86400};
						
						ngModelCtrl.$formatters.push(function(modelValue){
							var unit = 'minutes' , num = 0 ,i ,unitName;
							modelValue = parseInt( modelValue || 0);
							for(i = multiplierTypes.length-1 ;i>=0;i--){
								unitName = multiplierTypes[i];
								if(modelValue % multiplierMap[unitName]== 0){
									unit = unitName;
									break;
								}
							}
							if (modelValue) {
         				   		num = modelValue / multiplierMap[unit];
        					}
        					return {
        						unit :unit,
        						num :num
        					}
						});
						   ngModelCtrl.$parsers.push(function(viewValue) {
				                var unit = viewValue.unit, num = viewValue.num, multiplier;
				                multiplier = multiplierMap[unit];
				                return num * multiplier;
				            });

				            scope.$watch('unit + num', function() {
				                ngModelCtrl.$setViewValue({ unit: scope.unit, num: scope.num });
				            });

				            ngModelCtrl.$render = function() {
				                if (!$viewValue) $viewValue = { unit: 'hours', num: 1 };

				                scope.unit = ngModelCtrl.$viewValue.unit;
				                scope.num  = ngModelCtrl.$viewValue.num;
				            };

					}
				}

			}
			return directobj2;
		});
	

})