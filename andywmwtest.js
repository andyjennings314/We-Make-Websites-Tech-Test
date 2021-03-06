(function () {
    var app = angular.module('AJWMW', []);

	var homeCtrl = function ($filter) {
        var self = this;
		
		self.pageTitle = "Women's Jeans";
		self.pageDescription = "Our perfected jeans are designed with every body type in mind. With a comfortable mid rise and skinny leg, ours hugs your curves in all the right places for a universally flattering fit.";
		self.products = [
						 {title: "Lexy Super Skinny", price: 128, onSale: false, image: "test1.jpg"},
						 {title: "Kendra Straight Leg in Rinse Supersoft", price: 128, onSale: false, image: "test2.jpg"},
						 {title: "Kendra Straight Leg in Deep Super Soft", price: 128, onSale: false, image: "test3.jpg"},
						 {title: "Alissa Super Skinny in Dark Supersoft", price: 98, onSale: true, image: "test4.jpg"},
						 ];
		
		self.addToCart = function(product){
			alert(product.title + "added to your cart");
		}

    }

    app.controller('homeCtrl', homeCtrl);
}());