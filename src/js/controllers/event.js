angular.module('FriendManagerApp')
  .controller('NewEventFormController', NewEventFormController)
  .controller('EventIndexController', EventIndexController)
  .controller('EventShowController', EventShowController);


EventIndexController.$inject = ['$auth', '$state', 'Event'];
function EventIndexController($auth, $state, Event) {
  const eventIndex = this;

  eventIndex.all = Event.query();
  console.log('all events', eventIndex.all);
}

EventShowController.$inject = ['$auth', 'User', '$state', 'Event'];
function EventShowController($auth, User, $state, Event) {
  const eventShow = this;

  Event.get($state.params, (event) => {
    eventShow.event = event;
    console.log('this event', eventShow.event);
  });

}


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
  newEventForm.newEvent.wholiked = [];
  newEventForm.newEvent.whodisliked = [];

  function createNewEvent () {

    newEventForm.newEvent.activities.push(newEventForm.activities);
    newEventForm.newEvent.substances.push(newEventForm.substances);

    console.log('new event', newEventForm.newEvent);

    Event.save(newEventForm.newEvent, () => {
      $state.go('eventIndex');
    });
  }

  newEventForm.submit = createNewEvent;
}
