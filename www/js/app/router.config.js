define(function(require) {
	var Backbone = require("backbone");
	var Router = Backbone.Router.extend({
		routes: {
			"summary(/:id)": "summary",
			"goods(/:id)": "goods",
			"*actions": "default"
		}
	});

	var router = new Router();
	router.on("route", function(url, args) {
		console.log("-----router-----", url, args);
		router.currentCtl &&
			_.each(router.currentCtl, function(item) {
				item.remove();
			});
		switch (url) {
			case "goods":
				require([
					"app/controller/sidebarCtl",
					"app/controller/addGoodsCtl"
				], function(sidebarCtl, addGoodsCtl) {
					sidebarCtl();
					addGoodsCtl();
					router.currentCtl = [sidebarCtl, addGoodsCtl];
				});

				break;
			default:
				require(["app/controller/loginCtl"], function(loginCtl) {
					router.currentCtl = [loginCtl];
					loginCtl({ router: router });
				});
				break;
		}
	});

	return router;
});
