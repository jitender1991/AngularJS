
define(['servicemodule'],function(servicemodule){
	servicemodule.provider('provider1',function(constant1){
		console.log('this is in provider1');
		var priv = 'this is private variable of provider1' ;
		this.config_var   = 'config_var_1 is to be modified in config function';
		constant1.msg ='constant1 msg changed in provider-----------------------';
		console.log(constant1.msg);
		this.$get =  function(){
			var obj1 = {};
			obj1.provider_msg ='this is service obj msg of provider1 ' ;
			return obj1;
		};
	})
});