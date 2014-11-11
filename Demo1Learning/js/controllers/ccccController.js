define(['controllers'],function(controllers){

	var ccccController = controllers.controller('ccccController',function($scope,provider2,service2,factory2,constant2,value1){
		console.log(provider2.provider_msg);
		 console.log(service2.service_msg);
		  console.log(factory2.msg);
		 var const1 = constant2();
		console.log(const1.msg);
		 var val1 = value1();
		console.log(val1.msg);
		  $scope.message = 'This is ccccController    screen';
	})	
 return ccccController;
});