angular.module('FriendManagerApp')
  .controller('FriendIndexController', FriendIndexController)
  .controller('FriendShowController', FriendShowController)
  .controller('NewFriendFormController', NewFriendFormController);


FriendIndexController.$inject = ['$auth', 'User', '$state', 'Friend'];
function FriendIndexController($auth, User, $state, Friend) {
  const friendIndex = this;

  friendIndex.all = Friend.query();
  console.log('all friends', friendIndex.all);
}

FriendShowController.$inject = ['$auth', 'User', '$state', 'Friend'];
function FriendShowController($auth, User, $state, Friend) {
  const friendShow = this;

  friendShow.friend = Friend.get($state.params);
  console.log('this friend', friendShow.friend);

}


NewFriendFormController.$inject = ['$auth', '$state', 'Friend'];
function NewFriendFormController($auth, $state, Friend) {
  const newFriendForm = this;

  newFriendForm.newFriend = {};
  // if (!newFriendForm.newFriend.user) {
  newFriendForm.newFriend.user = $auth.getPayload()._id;
  // }

  function createNewFriend () {
    Friend.save(newFriendForm.newFriend, () => {
      $state.go('friendIndex');
    });
  }


  newFriendForm.submit = createNewFriend;

}
