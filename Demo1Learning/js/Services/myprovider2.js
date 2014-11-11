
define(['servicemodule'],function(servicemodule){
	servicemodule.provider('provider2',function(){
		var priv = 'this is private variable of provider2' ;
		this.config_var   = 'config_var_2 is to be modified in config function';
		this.$get =  function(){
			var obj1 = {};
			obj1.provider_msg ='this is service obj msg of provider2 ' ;
			return obj1;
		};
	})
});