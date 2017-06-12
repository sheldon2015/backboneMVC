define(function(require) {
	var Backbone = require("backbone");
	var Router = Backbone.Router.extend({
		routes: {
			"summary(/:id)": "summary",
			"goods(/:id)": "goods",
			"*actions": "default"
		},
		goods: function() {},

		default: function(url, args) {
			console.log(url, args);
		}
	});

	var router = new Router();

	router.on("route", function(url, args) {
		console.log("-----router-----", url, args);
		switch (url) {
			case "goods":
				require(["app/controller/sidebarCtl"], function(sidebarCtl) {
					sidebarCtl();
				});
				break;

			default:
				require(["app/controller/loginCtl"], function(loginCtl) {
					loginCtl({ router: router });
				});
				break;
		}
	});

	return router;
});
