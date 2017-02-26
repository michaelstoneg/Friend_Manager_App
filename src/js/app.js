angular
  .module('FriendManagerApp', ['ngAnimate', 'ngResource', 'ui.router', 'satellizer', 'angular-carousel', 'chart.js'])
  .config(Router)
  .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: '/templates/test.html'
    })
    .state('login', {
      url: '/',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('friendIndex', {
      url: '/friendIndex',
      templateUrl: '/templates/friendIndex.html',
      controller: 'friendController as friendIndex'
    });
  $urlRouterProvider.otherwise('/');
}
Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';
  $authProvider.tokenPrefix = '';
}
