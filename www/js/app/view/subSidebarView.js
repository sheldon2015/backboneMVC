define(function(require) {
	var Backbone = require("backbone");
	var tpl = require("text!app/tpl/sidebarTpl.html");
	var SidebarView = Backbone.View.extend({
		initialize: function() {
			this.listenTo(this.collection, "add", this.render);
		},

		render: function() {
			this.$el.html(_.template(tpl)({ items: this.collection.toJSON() }));
			$("#sidebar").after(this.$el);
		}
	});

	return SidebarView;
});
