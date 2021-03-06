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
    .state('userForm', {
      url: '/userForm',
      templateUrl: '/templates/userForm.html',
      controller: 'UserFormController as userForm'
    })
    .state('userShow', {
      url: '/userShow',
      templateUrl: '/templates/userShow.html',
      controller: 'UserShowController as userShow'
    })
    .state('newFriendForm', {
      url: '/newFriendForm',
      templateUrl: '/templates/newFriendForm.html',
      controller: 'NewFriendFormController as newFriendForm'
    })
    .state('friendIndex', {
      url: '/friendIndex',
      templateUrl: '/templates/friendIndex.html',
      controller: 'FriendIndexController as friendIndex'
    })
    .state('friendShow', {
      url: '/friend/:id',
      templateUrl: '/templates/friendShow.html',
      controller: 'FriendShowController as friendShow'
    })
    .state('friendEdit', {
      url: '/friend/:id/edit',
      templateUrl: '/templates/friendEdit.html',
      controller: 'FriendShowController as friendShow'
    })
    .state('newEventForm', {
      url: '/newEventForm',
      templateUrl: '/templates/newEventForm.html',
      controller: 'NewEventFormController as newEventForm'
    })
    .state('eventIndex', {
      url: '/eventIndex',
      templateUrl: '/templates/eventIndex.html',
      controller: 'EventIndexController as eventIndex'
    })
    .state('eventShow', {
      url: '/event/:id',
      templateUrl: '/templates/eventShow.html',
      controller: 'EventShowController as eventShow'
    })
    .state('newLocationForm', {
      url: '/newLocationForm',
      templateUrl: '/templates/newLocationForm.html',
      controller: 'NewLocationFormController as newLocationForm'
    })
    .state('locationIndex', {
      url: '/locationIndex',
      templateUrl: '/templates/locationIndex.html',
      controller: 'LocationIndexController as locationIndex'
    })
    .state('locationShow', {
      url: '/location/:id',
      templateUrl: '/templates/locationShow.html',
      controller: 'LocationShowController as locationShow'
    });
  $urlRouterProvider.otherwise('/');
}
Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';
  $authProvider.tokenPrefix = '';
}
