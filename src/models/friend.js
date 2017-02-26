angular.module('FriendManagerApp')
  .factory('Friend', Friend);

Friend.$inject = ['$resource'];
function Friend($resource) {
  return new $resource('/friends/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
