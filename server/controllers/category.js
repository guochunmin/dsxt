var categoryCtrl = require ("../service/category");
module.exports=function(app){
	app.get('/category.html',categoryCtrl.getCategory)
}