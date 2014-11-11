define(['controllers'],function(controllers){

	var homeController = controllers.controller('homeController',function($scope,$route,$routeParams ,$location,provider1,service1,factory1,constant1,value2){
		  $scope.message = 'This is homeController screen';
		  console.log(provider1.provider_msg);
		 console.log(service1.service_msg);
		 console.log(factory1.msg);
		 console.log(constant1.msg);
		console.log(value2.msg);
	})	
 return homeController;
});