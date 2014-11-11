define(['servicemodule'],function(servicemodule){
	servicemodule.value('value2',{	
		msg :'this is value obj2' ,
		funct1 : function(msg){
			this.msg = msg;
		}
	})

})