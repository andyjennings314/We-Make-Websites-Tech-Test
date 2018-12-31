(function () {
    var app = angular.module('AJWMW', []);

	var homeCtrl = function ($scope, $rootScope, $timeout) {
        var self = this;
		
		self.pageTitle = "Women's Jeans";
		self.pageDescription = "Our perfected jeans are designed with every body type in mind. With a comfortable mid rise and skinny leg, ours hugs your curves in all the right places for a universally flattering fit.";
		self.products = [
						 {title: "Lexy Super Skinny", price: "£128.00", onSale: true},
						 ];

    }

    app.controller('homeCtrl', homeCtrl);
}());