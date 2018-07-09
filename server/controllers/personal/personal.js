var personalCtrl = require ("../../service/personal/personal");
module.exports=function(app){
	app.get('/personal.html',personalCtrl.getPersonal)
}