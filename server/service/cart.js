var baseData = require ("./base/baseData");
module.exports={
	getCart:function(req,res){
		res.render('cart',{
			footer:baseData.baseNavData,
			nav:2
		});
	}
}
