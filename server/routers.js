module.exports = function(app) {
	require("./controllers/index")(app);
	require("./controllers/category")(app);
	require("./controllers/cart")(app);
	require("./controllers/personal/personal")(app);
	require("./controllers/personal/singn")(app);
}