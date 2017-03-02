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
  newEventForm.activities1 = {
    name: undefined,
    type: undefined
  };
  newEventForm.activities2 = {
    name: undefined,
    type: undefined
  };

  newEventForm.substances = {
    name: undefined,
    type: undefined
  };
  newEventForm.substances1 = {
    name: undefined,
    type: undefined
  };
  newEventForm.substances2 = {
    name: undefined,
    type: undefined
  };

  newEventForm.newEvent.activities = [];
  newEventForm.newEvent.substances = [];

  newEventForm.newEvent.friends = [];
  newEventForm.newEvent.wholiked = [];
  newEventForm.newEvent.whodisliked = [];

  function createNewEvent () {

    newEventForm.newEvent.activities.push(newEventForm.activities, newEventForm.activities1, newEventForm.activities2);
    newEventForm.newEvent.substances.push(newEventForm.substances, newEventForm.substances1, newEventForm.substances2);

    const whoDisliked = [];
    const whoLiked = [];

    newEventForm.newEvent.whodisliked.forEach((item) => {
      if(item) whoDisliked.push(item);
    });

    newEventForm.newEvent.wholiked.forEach((item) => {
      if(item) whoLiked.push(item);
    });
    newEventForm.newEvent.whodisliked = whoDisliked;
    newEventForm.newEvent.wholiked = whoLiked;


    console.log('new event', newEventForm.newEvent);

    Event.save(newEventForm.newEvent, () => {
      $state.go('eventIndex');
    });
  }

  newEventForm.submit = createNewEvent;
}
