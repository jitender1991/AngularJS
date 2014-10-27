define(['controllers'],function(controllers){

	var homeController = controllers.controller('homeController',function($scope,$route,$routeParams ,$location){
		  $scope.message = 'This is homeController screen';
	})	
 return homeController;
});