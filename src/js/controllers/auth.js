angular.module('FriendManagerApp')
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController);

RegisterController.$inject = ['$auth', '$state', '$window'];
function RegisterController($auth, $state, $window) {
  const register = this;

  function submit() {
    $auth.signup(register.user)
      .then((res) => {
        $window.localStorage.setItem('token', res.data.token);
        $state.go('userForm');
      });
  }
  register.submit = submit;
}


LoginController.$inject = ['$auth', '$state', 'User'];
function LoginController($auth, $state, User) {
  const login = this;
  login.credentials = {};
  function submit() {
    $auth.login(login.credentials)
    .then(() => {
      $state.go('test');
    });
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
    .then((res) => {
      console.log(res);
      $state.go('test');
    });
  }
  login.submit = submit;
  login.authenticate = authenticate;
}
