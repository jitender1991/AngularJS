define(['servicemodule'],function(servicemodule){
	servicemodule.service('service2',function(){
		this.service_msg ='this is service2 msg' ;
		this.changeServiceMessage = function(msg){
			this.service_msg = msg;
		};

	});

});