var baseData = require ("./base/baseData");
module.exports={
	getIndex:function(req,res){
		res.render('index',{
			footer:baseData.baseNavData,
			nav:0
		});
	}
}
