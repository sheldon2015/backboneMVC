define(function(require) {
	var Backbone = require("backbone");
	var Model = Backbone.Model.extend({
		defaults: function() {
			return {
				name: "",
				password: ""
			};
		},

		save: function(args) {
			var me = this;
			$.ajax({
				url: "server/login.json",
				success: function(data) {
					me.set({
						name: data.name,
						password: data.password
					});
				}
			});
		}
	});

	return Model;
});
