angular.module('FriendManagerApp')
  .controller('NewEventFormController', NewEventFormController);


NewEventFormController.$inject = ['$auth', '$state', 'Event'];
function NewEventFormController($auth, $state, Event) {
  const newEventForm = this;

  newEventForm.newEvent = {};
  newEventForm.activities = {
    name: undefined,
    type: undefined
  };
  newEventForm.newEvent.activities = [];
  newEventForm.newEvent.substances = [];

  newEventForm.substances = {
    name: undefined,
    type: undefined
  };

  newEventForm.newEvent.friends = [];
  newEventForm.newEvent.whoLiked = [];
  newEventForm.newEvent.whoDisliked = [];



  function createNewEvent () {

    newEventForm.newEvent.activities.push(newEventForm.activities);
    newEventForm.newEvent.substances.push(newEventForm.substances);

    console.log('new event', newEventForm.newEvent, 'friends', newEventForm.newEvent.friends);

    Event.save(newEventForm.newEvent, () => {
      $state.go('test');
    });
  }


  newEventForm.submit = createNewEvent;

}
