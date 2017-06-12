define(function(require) {
	var Backbone = require("backbone");
	var Model = Backbone.Model.extend({
		defaults: function() {
			return {
				anchor: "",
                href:''
			};
		}
	});

	return Model;
});
