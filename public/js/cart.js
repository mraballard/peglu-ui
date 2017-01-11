(function(){

  angular.module('peglu')
  .factory('$cart', Cart);

  function Cart($http){
    var cart = {};
    cart.total;
    cart.itemIds = [];

    cart.getProducts = function() {
      cart.items.forEach(function(el){
        cart.itemIds.push(el.product.id);
      });
      return cart.itemIds;
    }

    cart.emptyCart = function(){
      cart.items = [];
      cart.total = 0;
    }
    cart.add = function(item, quantity, store) {
        var indexOfProductInCart = cart.items.findIndex(function(el) {
          return el.product.id === item.id;
        });

        if (indexOfProductInCart === -1) {
          // if item is not in cart, push item, quantity, and subtotal to cart
            cart.items.push({product: item, quantity: Number(quantity), subtotal: (item.price * quantity)})
        } else {
          // item is already in cart, update quantity and subtotal
          cart.items[indexOfProductInCart].quantity += Number(quantity);
          cart.items[indexOfProductInCart].subtotal = (item.price * cart.items[indexOfProductInCart].quantity);
        }
        cart.calculateTotal();
    }

    cart.update = function(item, quantity) {
      var indexOfProductInCart = cart.items.findIndex(function(el) {
            return el.product.id === item.product.id;
      });
      cart.items[indexOfProductInCart].quantity = Number(quantity);
      cart.items[indexOfProductInCart].subtotal = (item.product.price * cart.items[indexOfProductInCart].quantity);
      cart.calculateTotal();
    }
    cart.remove = function(item) {
      var indexOfProductInCart = cart.items.findIndex(function(el) {
            return el.product.id === item.product.id;
      });
      cart.items.splice(indexOfProductInCart, 1);
      cart.calculateTotal();
      if (cart.items.length < 1) {
        cart.emptyCart();
      }
    }

    cart.calculateTotal = function() {
      cart.total = 0;
      cart.items.forEach(function(el){
        cart.total += el.subtotal;
      })
    }

    cart.emptyCart();
    return cart;
  }
})()
