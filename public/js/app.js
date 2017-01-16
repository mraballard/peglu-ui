(function(){
  angular.module('peglu', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize'])
  .controller('mainController', mainController);


  mainController.$inject = ['$scope', '$http', '$state', '$cart'];

  function mainController($scope, $http, $state, $cart) {
    var rootUrl = 'http://localhost:4000/';
    var self = this;


// STYLES / BOOTSTRAP
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
  }

})();

console.log('app.js');
