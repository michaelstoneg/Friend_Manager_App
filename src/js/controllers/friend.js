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

  Friend.get($state.params, (friend) => {
    friendShow.friend = friend;
    console.log('this friend', friendShow.friend);
  });

}


NewFriendFormController.$inject = ['$auth', '$state', 'Friend'];
function NewFriendFormController($auth, $state, Friend) {
  const newFriendForm = this;

  newFriendForm.newFriend = {};
  newFriendForm.newFriend.hobbies = [];
  newFriendForm.newFriend.interests = [];

  newFriendForm.contact = {
    email: undefined,
    phone: undefined
  };

  newFriendForm.hobbies = {
    name: undefined,
    type: undefined
  };
  newFriendForm.interests = {
    name: undefined,
    type: undefined
  };
  newFriendForm.sign = {
    asc: undefined,
    sun: undefined,
    moon: undefined,
    mercury: undefined,
    venus: undefined
  };

  newFriendForm.newFriend.user = $auth.getPayload()._id;

  function createNewFriend () {

    newFriendForm.newFriend.hobbies.push(newFriendForm.hobbies);
    newFriendForm.newFriend.interests.push(newFriendForm.interests);
    newFriendForm.newFriend.contact = newFriendForm.contact;

    console.log('new friend', newFriendForm.newFriend);

    Friend.save(newFriendForm.newFriend, () => {
      $state.go('friendIndex');
    });
  }


  newFriendForm.submit = createNewFriend;

}
