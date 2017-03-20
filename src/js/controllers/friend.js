angular.module('FriendManagerApp')
  .controller('FriendIndexController', FriendIndexController)
  .controller('FriendShowController', FriendShowController)
  .controller('NewFriendFormController', NewFriendFormController);


FriendIndexController.$inject = ['$auth', 'User', '$state', 'Friend'];
function FriendIndexController($auth, User, $state, Friend) {
  const friendIndex = this;

  friendIndex.all = Friend.query((allFriends) => {
    console.log(allFriends);
    console.log('all friends', friendIndex.all);
  });
}

FriendShowController.$inject = ['$auth', 'User', '$state', 'Friend'];
function FriendShowController($auth, User, $state, Friend) {
  const friendShow = this;

  Friend.get($state.params, (friend) => {
    friendShow.friend = friend;
    console.log('this friend', friendShow.friend);
  });

  function deleteFriend() {
    console.log(friendShow.friend._id);
    console.log('friend go bye bye!');
    Friend.remove({ id: friendShow.friend._id }, () => {
      $state.go('friendIndex');
    });
  }

  // function updateFriend() {
  //   Display.update({id: displayEdit.display.id}, displayEdit.display, () => {
  //     $state.go('displayShow', $state.params);
  //   });
  // }


  friendShow.deleteFriend = deleteFriend;
  // friendShow.updateFriend = updateFriend;

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
  newFriendForm.hobbies1 = {
    name: undefined,
    type: undefined
  };
  newFriendForm.interests1 = {
    name: undefined,
    type: undefined
  };
  newFriendForm.hobbies2 = {
    name: undefined,
    type: undefined
  };
  newFriendForm.interests2 = {
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

    newFriendForm.newFriend.hobbies.push(newFriendForm.hobbies, newFriendForm.hobbies1, newFriendForm.hobbies2);
    newFriendForm.newFriend.interests.push(newFriendForm.interests, newFriendForm.interests1, newFriendForm.interests2);
    newFriendForm.newFriend.contact = newFriendForm.contact;

    if(newFriendForm.newFriend.likes) {
      newFriendForm.newFriend.likes = newFriendForm.newFriend.likes.split(',');
    }
    if (newFriendForm.newFriend.dislikes) {
      newFriendForm.newFriend.dislikes = newFriendForm.newFriend.dislikes.split(',');
    }
    console.log('split likes', newFriendForm.newFriend.likes);
    console.log('split dislikes', newFriendForm.newFriend.dislikes);

    console.log('new friend', newFriendForm.newFriend);

    Friend.save(newFriendForm.newFriend, () => {
      $state.go('friendIndex');
    });
  }


  newFriendForm.submit = createNewFriend;

}
