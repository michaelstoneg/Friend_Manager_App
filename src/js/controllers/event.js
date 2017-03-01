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

  newEventForm.newEvent.friends = [];



  function createNewEvent () {

    console.log('new event', newEventForm.newEvent, 'friends', newEventForm.newEvent.friends);

    Event.save(newEventForm.newEvent, () => {
      $state.go('test');
    });
  }


  newEventForm.submit = createNewEvent;

}
