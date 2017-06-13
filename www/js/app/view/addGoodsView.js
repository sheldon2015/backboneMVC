define(function(require) {
	var Backbone = require("backbone");
	var $ = require("jquery");
	require("bootstrap.min");
	var tpl = require("text!app/tpl/addGoodsTpl.html");

	var AddGoodsView = Backbone.View.extend({
		id: "right",
		className: "col-xs-9",

		render: function() {
			this.$el.append(_.template(tpl)());
			$("#main").append(this.$el);
		}
	});

	return AddGoodsView;
});
