define(['servicemodule'],function(servicemodule){
	console.log('this is in service1')
 	servicemodule.service('service1',function(){
		 		this.service_msg ='this is service1 msg' ;
		this.changeServiceMessage = function(msg){
			this.service_msg = msg;
		};

	});

});