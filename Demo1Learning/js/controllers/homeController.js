define(['controllers'],function(controllers){

	var homeController = controllers.controller('homeController',function($scope){

		  $scope.message = 'This is homeController screen';

	})	

 return homeController;



});