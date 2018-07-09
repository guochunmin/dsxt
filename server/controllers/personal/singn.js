var singnCtrl = require ("../../service/personal/singn");
module.exports=function(app){
	app.get('/login.html',singnCtrl.singnIn);
	app.get('/singnUp.html',singnCtrl.singnUp);
}