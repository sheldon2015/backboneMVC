define(["app/view/sidebarView", "app/model/sidebarModel"], function(
	SidebarView,
	SidebarModel
) {
	var controller = function() {
		var SidebarModelCollection = Backbone.Collection.extend({
			model: SidebarModel
		});
		//渲染主侧边栏
		var sidebarView = new SidebarView({
			id: "sidebar",
			className: "col-xs-1 sidebar",
			collection: new SidebarModelCollection([
				{ anchor: "概况", href: "summary" },
				{ anchor: "商品", href: "goods" }
			])
		});

		sidebarView.render();
		//渲染次侧边栏
		var subsidebarView = new SidebarView({
			id: "sub-sidebar",
			className: "col-xs-2 sub-sidebar",
			collection: new SidebarModelCollection([
				{ anchor: "商品列表", href: "goods/list" },
				{ anchor: "商品品牌", href: "goods/brand" },
				{ anchor: "商品类型", href: "goods/catgory" },
				{ anchor: "商品回收站", href: "goods/recycle" },
				{ anchor: "库存预警", href: "goods/warning" }
			])
		});
		subsidebarView.render();
		//渲染次侧边栏

		controller.remove = function() {
			sidebarView.remove();
			subsidebarView.remove();
		};
	};

	return controller;
});
