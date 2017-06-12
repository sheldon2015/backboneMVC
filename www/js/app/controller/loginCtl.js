define(["app/view/loginView", "app/model/loginModel"], function(
	LoginView,
	LoginModel
) {
	var controller = function(arg) {
		var loginView = new LoginView({
			model: new LoginModel()
		});
		loginView.render();
		loginView.router = arg.router;
	};

	return controller;
});
