define(function(require) {
	var Backbone = require("backbone");
	var tpl = require("text!app/tpl/sidebarTpl.html");

	var css = require("text!./../../../css/index.css");

	var SidebarView = Backbone.View.extend({
		events: { "click li": "click" },
		click: function(e) {
			this.subsidebarView.collection.set([
				{ anchor: "商品类型", href: "goods/catgory" }
			]);
		},
		render: function() {
			this.$el.html(_.template(tpl)({ items: this.collection.toJSON() }));
			$("#main").append(this.$el);
		}
	});

	return SidebarView;
});
