angular.module('FriendManagerApp')
  .controller('MainController', MainController);


MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
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
  const protectedStates = ['friendIndex'];
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
