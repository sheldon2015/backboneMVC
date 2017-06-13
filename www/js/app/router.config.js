define(function(require) {
	var Backbone = require("backbone");
	var Router = Backbone.Router.extend({
		routes: {
			"summary(/:id)": "goods",
			"goods(/:id)": "goods",
			"*actions": "default"
		}
	});

	var router = new Router();
	router.on("route", function(url, args) {
		console.log("-----router-----", url, args);

		switch (url) {
			case "goods":
				require(["app/controller/addGoodsCtl"], function(addGoodsCtl) {
					addGoodsCtl();
					router.currentCtl && router.currentCtl.remove();

					router.currentCtl = addGoodsCtl;
				});

				break;
			default:
				require(["app/controller/loginCtl"], function(loginCtl) {
					loginCtl({ router: router });
					router.currentCtl && router.currentCtl.remove();

					router.currentCtl = loginCtl;
				});
				break;
		}
	});

	return router;
});
