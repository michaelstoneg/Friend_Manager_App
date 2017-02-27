angular.module('FriendManagerApp')
  .controller('FriendIndexController', FriendIndexController)
  .controller('NewFriendFormController', NewFriendFormController);


FriendIndexController.$inject = ['$auth', 'User', '$state', 'Friend'];
function FriendIndexController($auth, User, $state, Friend) {
  const friendIndex = this;

  friendIndex.index = Friend.query();

  console.log('all friends', friendIndex.index);

}

NewFriendFormController.$inject = ['$auth', '$state', 'Friend'];
function NewFriendFormController($auth, $state, Friend) {
  const newFriendForm = this;

  newFriendForm.newFriend = {};
  // if (!newFriendForm.newFriend.user) {
  newFriendForm.newFriend.user = $auth.getPayload()._id;
  // }

  function createNewFriend () {

    console.log('data to be saved', newFriendForm.newFriend, 'new friend user', newFriendForm.newFriend.user);

    Friend.save(newFriendForm.newFriend, () => {
      newFriendForm.newFriend = {};
      $state.go('friendIndex');
    });
  }


  newFriendForm.submit = createNewFriend;

}
