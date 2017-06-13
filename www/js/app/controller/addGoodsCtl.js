define(["app/view/addGoodsView", "./sidebarCtl"], function(
	AddGoodsView,
	sidebarCtl
) {
	var controller = function(arg) {
		sidebarCtl();
		var addGoodsView = new AddGoodsView();
		addGoodsView.render();
		controller.remove = function() {
			
				addGoodsView.remove();
				sidebarCtl.remove();
			
		};
	};

	return controller;
});
