(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };

    toBuyList.listItems = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.msg = 'Everything is bought!';
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.listBoughtItems = ShoppingListCheckOffService.getBoughtItems();

    boughtList.msg = 'Nothing bought yet.';
   
}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
        { name: "Meat", quantity: 12 },
        { name: "Milk", quantity: 4 },
        { name: "Chocolate", quantity: 7 },
        { name: "Peanut", quantity: 1 },
        { name: "MashMallow", quantity: 2 }
    ];

    var boughtItems = [];

    service.removeItem = function (itemIndex) {
      let item = toBuyItems[itemIndex];
      boughtItems.splice(0, 0, item);
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.checkBoughtItems = function () {
      return boughtItems.length;
    };
  }
})();
