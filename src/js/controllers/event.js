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



  function createNewEvent () {

    newEventForm.newEvent.activities.push(newEventForm.activities);

    console.log('new event', newEventForm.newEvent);

    Event.save(newEventForm.newEvent, () => {
      $state.go('eventIndex');
    });
  }


  newEventForm.submit = createNewEvent;

}
