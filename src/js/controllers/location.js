angular.module('FriendManagerApp')
  .controller('NewLocationFormController', NewLocationFormController)
  .controller('LocationIndexController', LocationIndexController)
  .controller('LocationShowController', LocationShowController);


LocationIndexController.$inject = ['$auth', '$state', 'Location'];
function LocationIndexController($auth, $state, Location) {
  const locationIndex = this;

  locationIndex.all = Location.query();
  console.log('all locations', locationIndex.all);
}

LocationShowController.$inject = ['$auth', 'User', '$state', 'Location'];
function LocationShowController($auth, User, $state, Location) {
  const locationShow = this;

  Location.get($state.params, (location) => {
    locationShow.location = location;
    console.log('this location', locationShow.location);
  });

}


NewLocationFormController.$inject = ['$auth', '$state', 'Location'];
function NewLocationFormController($auth, $state, Location) {
  const newLocationForm = this;

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

  function createNewLocation () {

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


    newEventForm.newEvent.positives.split(',');
    newEventForm.newEvent.negatives.split(',');
    console.log('split positives', newEventForm.newEvent.positives);
    console.log('split negatives', newEventForm.newEvent.negatives);

    console.log('new event', newEventForm.newEvent);

    Location.save(newEventForm.newEvent, () => {
      $state.go('eventIndex');
    });
  }

  newLocationForm.submit = createNewLocation;
}
