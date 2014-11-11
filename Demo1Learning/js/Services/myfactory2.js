define(['servicemodule'],function(servicemodule){
	servicemodule.factory('factory2',function(){
		var obj ={};
		obj.msg =  'this is factory2 msg';
		return obj;
	});
});