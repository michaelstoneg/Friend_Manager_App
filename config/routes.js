const router = require('express').Router();
const authController = require('../controllers/auth');
const usersController = require('../controllers/users');
const friendsController = require('../controllers/friends');
const eventsController = require('../controllers/events');
const locationsController = require('../controllers/locations');

router
  .post('/login', authController.login)
  .post('/register', authController.register);

router.route('/users')
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);


router.route('/friends')
  .get(friendsController.index)
  .post(friendsController.create);

router.route('/friends/:id')
  .get(friendsController.show)
  .put(friendsController.update)
  .delete(friendsController.delete);


router.route('/events')
  .get(eventsController.index)
  .post(eventsController.create);

router.route('/events/:id')
  .get(eventsController.show)
  .put(eventsController.update)
  .delete(eventsController.delete);

router.route('/locations')
  .get(locationsController.index)
  .post(locationsController.create);

router.route('/locations/:id')
  .get(locationsController.show)
  .put(locationsController.update)
  .delete(locationsController.delete);

module.exports = router;
