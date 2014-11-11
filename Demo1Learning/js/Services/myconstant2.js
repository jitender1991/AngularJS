define(['servicemodule'],function(servicemodule){
	servicemodule.constant('constant2',function(){
		var obj ={};
		obj.msg ='this is constant obj2' ;
		obj.funct1 = function(msg){
			this.msg = msg;
	}
		return obj;


	})

})