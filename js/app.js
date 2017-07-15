(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
    	console.log("In ToBuyController");
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.ItemsToBuy();
        toBuy.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    };


    function AlreadyBoughtController(ShoppingListCheckOffService) {
    	console.log("In AlreadyBoughtController");
        var alreadyBougth = this;
        alreadyBougth.items = ShoppingListCheckOffService.ItemsBought();
    };

    function ShoppingListCheckOffService() {
    	console.log("In ShoppingListCheckOffService");
        var service = this;
        var buyItemsList = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "milk", quantity: 3 },
            { name: "sugary drinks", quantity: 3 },
            { name: "mars bars", quantity: 8 },
            { name: "cakes", quantity: 2 },
            { name: "dryfruits", quantity: 7 }
        ];
        

        service.ItemsToBuy=function(){
        	console.log("In ItemsToBuy");
        	return buyItemsList;
        };

        var boughtItemsList = [];

        service.ItemsBought= function(){
        	console.log("In ItemsBought");
        	return boughtItemsList;
        };

        service.buyItem=function(index2){
        	console.log("In buyItem");
        	var item=buyItemsList[index2];
        	boughtItemsList.push(item);
        	buyItemsList.splice(index2,1);
        };

    };

})();