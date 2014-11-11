define(['servicemodule'],function(servicemodule){
	servicemodule.value('value1',function(){
		var obj ={};
		obj.msg ='this is value1 obj' ;
		obj.funct1 = function(msg){
			this.msg = msg;
		}
		return obj;


	})

})