
define(['servicemodule'],function(servicemodule){
	servicemodule.provider('provider2',function(){
		var priv = 'this is private variable of provider2' ;
		//provider1Provider.config_var = 'provider1 config msg chnaged in provider2------';
		//console.log(provider1Provider.config_var)
		this.config_var   = 'config_var_2 is to be modified in config function';
		this.$get =  function(provider1){
			provider1.provider_msg
			var obj1 = {};
			obj1.provider_msg ='provider1 provider_msg changed with in $get function of provider2' ;
			return obj1;
		};
	})
});