(function() {
  angular.module('peglu')
    .config(AuthRouter);


    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function AuthRouter($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('welcome', {
          url: '/',
          templateUrl: 'public/partials/_welcome.html',
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'public/partials/_signup.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'public/partials/_login.html'
        })
        .state('update', {
          url: '/update',
          templateUrl: 'public/partials/_update.html'
        })
        .state('home', {
          url: '/home',
          templateUrl: 'public/partials/_home.html',
        })
        .state('store', {
          url: '/store',
          templateUrl: 'public/partials/store.html',
        })
        .state('item', {
          url: '/item',
          templateUrl: 'public/partials/_item.html',
        })
        .state('cart', {
          url: '/cart',
          templateUrl: 'public/partials/_cart.html',
        })
        .state('order', {
          url: '/order',
          templateUrl: 'public/partials/_order.html',
        })
      }

})()


console.log("router.js");
