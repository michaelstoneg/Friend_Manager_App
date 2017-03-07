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

  newLocationForm.newLocation = {};
  newLocationForm.times = {
    opening: undefined,
    closing: undefined
  };

  newLocationForm.newLocation.friends = [];
  newLocationForm.newLocation.events = [];
  newLocationForm.newLocation.wholiked = [];
  newLocationForm.newLocation.whodisliked = [];

  function createNewLocation () {

    const whoDisliked = [];
    const whoLiked = [];
    const friends = [];
    const events = [];

    newLocationForm.newLocation.whodisliked.forEach((item) => {
      if(item) whoDisliked.push(item);
    });

    newLocationForm.newLocation.wholiked.forEach((item) => {
      if(item) whoLiked.push(item);
    });

    newLocationForm.newLocation.friends.forEach((item) => {
      if(item) friends.push(item);
    });

    newLocationForm.newLocation.events.forEach((item) => {
      if(item) events.push(item);
    });

    newLocationForm.newLocation.whodisliked = whoDisliked;
    newLocationForm.newLocation.wholiked = whoLiked;
    newLocationForm.newLocation.friends = friends;
    newLocationForm.newLocation.events = events;

    newLocationForm.newLocation.times = newLocationForm.times;

    newLocationForm.newLocation.positives = newLocationForm.newLocation.positives.split(',');
    newLocationForm.newLocation.negatives = newLocationForm.newLocation.negatives.split(',');
    console.log('split positives', newLocationForm.newLocation.positives);
    console.log('split negatives', newLocationForm.newLocation.negatives);



    console.log('new location', newLocationForm.newLocation);

    Location.save(newLocationForm.newLocation, () => {
      $state.go('locationIndex');
    });
  }

  newLocationForm.submit = createNewLocation;
}
