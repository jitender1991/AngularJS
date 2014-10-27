define(['controllers'] , function(controllers){	
	var myfirstcontroller = controllers.controller('myfirstcontroller' , function($scope){
			$scope.color = 'red';
		});
	 return myfirstcontroller;
});