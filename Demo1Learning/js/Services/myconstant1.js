define(['servicemodule'],function(servicemodule){
	servicemodule.constant('constant1',{	
		msg :'this is constant obj1' ,
		funct1 : function(msg){
			this.msg = msg;
		}
	})

})