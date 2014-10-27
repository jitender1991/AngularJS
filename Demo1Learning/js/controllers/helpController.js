define(['controllers'],function(controllers){

	var helpController = controllers.controller('helpController',function($scope,$route,$routeParams ,$location){
		  $scope.message = 'This is helpController screen';
		  $scope.listtype = $routeParams.param;
	});	
 	return helpController;
});