define(function(require) {
	var Backbone = require("backbone");
	var tpl = require("text!app/tpl/sidebarTpl.html");
	var SidebarView = Backbone.View.extend({
		render: function() {
			this.$el.html(
				_.template(tpl)({
					items: this.collection.toJSON()
				})
			);
			$("#main").append(this.$el);
		}
	});

	return SidebarView;
});
