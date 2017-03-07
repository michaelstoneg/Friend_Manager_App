angular.module('FriendManagerApp')
  .controller('MainController', MainController);


MainController.$inject = ['$auth', '$state', '$rootScope', 'User', 'Friend'];
function MainController($auth, $state, $rootScope, User, Friend) {
  const main = this;
  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;
  main.menuVisible = false;
  function logout() {
    $auth.logout()
    .then(() => {
      $state.go('friendIndex');
    });
  }


  //current user
  User.get({ id: $auth.getPayload()._id }, (user) => {
    main.user = user;
    console.log('current user', main.user);
  });

  //all friends & Events
  main.allFriends = Friend.query();
  main.allEvents = Event.query();

  const protectedStates = [];
  function secureState(e, toState) {
    main.menuVisible = false;
    main.message = null;
    console.log(toState, e);
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      main.message = 'You must be logged in to go there!';
      $state.go('login');
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);
  main.logout = logout;

  function toggleMenu() {
    main.menuVisible = main.menuVisible ? false : true;
  }

  main.toggleMenu = toggleMenu;
}
