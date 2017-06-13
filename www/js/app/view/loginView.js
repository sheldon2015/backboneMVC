define(function(require) {
	var Backbone = require("backbone");
	var tpl = require("text!app/tpl/loginTpl.html");
	var LoginView = Backbone.View.extend({
		id: "login",
		events: {
			"submit #login-form": "doSubmit"
		},
		initialize: function() {
			this.listenTo(this.model, "change", this.render);
			this.listenTo(this.model, "change", this.goTo);
		},

		doSubmit: function(e) {
			this.model.save();
			return false;
		},
		render: function() {
			this.$el.html(_.template(tpl)());
			$("#main").html(this.$el);
		},
		goTo: function() {
			this.router.navigate("goods", { trigger: true });
		}
	});

	return LoginView;
});
