define(['servicemodule'],function(servicemodule){
	servicemodule.factory('factory1',function(){
		var obj ={};
		obj.msg =  'this is factory1 msg';
		return obj;
	});
});