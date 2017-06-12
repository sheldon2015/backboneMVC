define(
	["app/view/sidebarView", "app/model/sidebarModel"],
	function(SidebarView, SidebarModel) {
		var controller = function() {
			var SidebarModelCollection = Backbone.Collection.extend({
				model: SidebarModel
			});
			//渲染主侧边栏
			new SidebarView({
				collection: new SidebarModelCollection([
					{ anchor: "概况", href: "summary" },
					{ anchor: "商品", href: "goods" }
				])
			}).render();
			//渲染次侧边栏
			new SidebarView({
				el: "#sub-sidebar",
				collection: new SidebarModelCollection([
					{ anchor: "商品列表", href: "goods/list" },
					{ anchor: "商品品牌", href: "goods/brand" },
					{ anchor: "商品类型", href: "goods/catgory" },
					{ anchor: "商品回收站", href: "goods/recycle" },
					{ anchor: "库存预警", href: "goods/warning" }
				])
			}).render();
			//渲染次侧边栏
		};

		return controller;
	}
);
