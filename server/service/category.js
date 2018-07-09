var baseData = require ("./base/baseData");
module.exports={
	getCategory:function(req,res){
		res.render('category',{
			footer:baseData.baseNavData,
			nav:1
		});
	}
}
