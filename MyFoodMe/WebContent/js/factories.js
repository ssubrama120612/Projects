app.factory('foodfactory', function(){
	var cusines = [];
	menus.forEach(function(menu){
		var cus = {'name':menu.Cuisine, 'checked' : 'false'};
		var exist = cusines.filter(function(c){
			return c.name === cus.name;
		});
		if(exist.length == 0)
			cusines.push(cus);
	});
	
	var restaurants = [];
	res.forEach(function(r){
		restaurants.push(r);
	});
	
	return{
		getCusines : function(){
			return cusines;
		},
		getRestaurants :  function(){
			return restaurants;
		}
	};
});