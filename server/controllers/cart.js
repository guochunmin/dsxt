var cartCtrl = require ("../service/cart");
module.exports=function(app){
	app.get('/cart.html',cartCtrl.getCart)
}