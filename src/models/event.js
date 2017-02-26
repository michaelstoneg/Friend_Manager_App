angular.module('FriendManagerApp')
  .factory('Event', Event);

Event.$inject = ['$resource'];
function Event($resource) {
  return new $resource('/events/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
