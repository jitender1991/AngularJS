define(['app'] , function(app){	
	var myfirstcontroller = app.controller('myfirstcontroller' , function($scope){
			$scope.color = 'red';
		});
	 return myfirstcontroller;
});