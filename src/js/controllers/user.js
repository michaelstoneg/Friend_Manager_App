angular.module('FriendManagerApp')
  .controller('UserFormController', UserFormController)
  .controller('UserShowController', UserShowController);
  // .controller('UserDataController', UserDataController);



UserFormController.$inject = ['$auth', 'User', '$state'];
function UserFormController($auth, User, $state) {
  const userForm = this;

  //make objects
  userForm.hobbies = {
    name: undefined,
    type: undefined
  };
  userForm.interests = {
    name: undefined,
    type: undefined
  };
  userForm.sign = {
    asc: undefined,
    sun: undefined,
    moon: undefined,
    mercury: undefined,
    venus: undefined
  };

  userForm.user = User.get({ id: $auth.getPayload()._id });

  function submit() {
     // console.log('pre update', userForm.user);

    //push objects to array
    userForm.user.hobbies.push(userForm.hobbies);
    userForm.user.interests.push(userForm.interests);
    userForm.user.sign.push(userForm.sign);
    console.log('data to be saved', userForm.user, 'user object hobbies', userForm.user.hobbies, 'user object interests', userForm.user.interests, 'user object sign', userForm.user.sign);

    userForm.user.$update(() => {
      console.log('post update your data', userForm.user);
      $state.go('userShow');
    });
  }

  userForm.submit = submit;

}


UserShowController.$inject = ['$auth', '$state', '$rootScope', 'User'];
function UserShowController($auth, $state, $rootScope, User) {
  const userShow = this;

  User.get({ id: $auth.getPayload()._id }, (user) => {
    userShow.user = user;
    console.log('showing user', userShow.user);
  });

}
