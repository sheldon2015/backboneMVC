define(["app/view/addGoodsView"], function(AddGoodsView) {
	var controller = function(arg) {
		var addGoodsView = new AddGoodsView();
		addGoodsView.render();

		controller.remove = function() {
			addGoodsView.remove();
		};
	};

	return controller;
});
