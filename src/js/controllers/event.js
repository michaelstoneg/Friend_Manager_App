angular.module('FriendManagerApp')
  .controller('NewEventFormController', NewEventFormController)
  .controller('EventIndexController', EventIndexController)
  .controller('EventShowController', EventShowController);


EventIndexController.$inject = ['$auth', '$state', 'Event'];
function EventIndexController($auth, $state, Event) {
  const eventIndex = this;

  eventIndex.all = Event.query((allEvents) => {
    console.log(allEvents);
    console.log('all events', eventIndex.all);
  });
}

EventShowController.$inject = ['$auth', 'User', '$state', 'Event'];
function EventShowController($auth, User, $state, Event) {
  const eventShow = this;

  Event.get($state.params, (event) => {
    eventShow.event = event;
    console.log('this event', eventShow.event);
  });

  function deleteEvent() {
    console.log(eventShow.event._id);
    console.log('event go bye bye!');
    Event.remove({ id: eventShow.event._id }, () => {
      $state.go('eventIndex');
    });
  }

  eventShow.deleteEvent = deleteEvent;
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

    if(newEventForm.newEvent.positives) {
      newEventForm.newEvent.positives = newEventForm.newEvent.positives.split(',');
    }
    if(newEventForm.newEvent.negatives) {
      newEventForm.newEvent.negatives = newEventForm.newEvent.negatives.split(',');
    }

    console.log('split positives', newEventForm.newEvent.positives);
    console.log('split negatives', newEventForm.newEvent.negatives);

    console.log('new event', newEventForm.newEvent);

    Event.save(newEventForm.newEvent, () => {
      $state.go('eventIndex');
    });
  }

  newEventForm.submit = createNewEvent;
}
