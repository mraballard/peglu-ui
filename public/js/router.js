(function() {
  angular.module('peglu' , ['ui.router'])
    .config(AuthRouter);


    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function AuthRouter($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('welcome', {
          url: '/',
          templateUrl: '../partials/_welcome.html',
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '../partials/_signup.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '../partials/_login.html'
        })
        .state('update', {
          url: '/update',
          templateUrl: '../partials/_update.html'
        })
        .state('home', {
          url: '/home',
          templateUrl: '../partials/_home.html',
        })
        .state('store', {
          url: '/store',
          templateUrl: '../partials/store.html',
        })
        .state('item', {
          url: '/item',
          templateUrl: '../partials/_item.html',
        })
        .state('cart', {
          url: '/cart',
          templateUrl: '../partials/_cart.html',
        })
        .state('order', {
          url: '/order',
          templateUrl: '../partials/_order.html',
        })
      }

})()


console.log("router.js");
