"use strict";function Router(e,t){e.state("test",{url:"/test",templateUrl:"/templates/test.html"}).state("login",{url:"/",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("userForm",{url:"/userForm",templateUrl:"/templates/userForm.html",controller:"UserFormController as userForm"}).state("userShow",{url:"/userShow",templateUrl:"/templates/userShow.html",controller:"UserShowController as userShow"}).state("newFriendForm",{url:"/newFriendForm",templateUrl:"/templates/newFriendForm.html",controller:"NewFriendFormController as newFriendForm"}).state("friendIndex",{url:"/friendIndex",templateUrl:"/templates/friendIndex.html",controller:"FriendIndexController as friendIndex"}).state("friendShow",{url:"/friend/:id",templateUrl:"/templates/friendShow.html",controller:"FriendShowController as friendShow"}).state("newEventForm",{url:"/newEventForm",templateUrl:"/templates/newEventForm.html",controller:"NewEventFormController as newEventForm"}).state("eventIndex",{url:"/eventIndex",templateUrl:"/templates/eventIndex.html",controller:"EventIndexController as eventIndex"}).state("eventShow",{url:"/event/:id",templateUrl:"/templates/eventShow.html",controller:"EventShowController as eventShow"}),t.otherwise("/")}function Auth(e){e.loginUrl="/login",e.signupUrl="/register",e.tokenPrefix=""}function RegisterController(e,t,n){function r(){e.signup(o.user).then(function(e){n.localStorage.setItem("token",e.data.token),t.go("userForm")})}var o=this;o.submit=r}function LoginController(e,t,n){function r(){e.login(i.credentials).then(function(){t.go("test")})}function o(n){e.authenticate(n).then(function(e){console.log(e),t.go("test")})}var i=this;i.credentials={},i.submit=r,i.authenticate=o}function Event(e){return new e("/events/:id",{id:"@_id"},{update:{method:"PUT"}})}function EventIndexController(e,t,n){var r=this;r.all=n.query(),console.log("all events",r.all)}function EventShowController(e,t,n,r){var o=this;r.get(n.params,function(e){o.event=e,console.log("this event",o.event)})}function NewEventFormController(e,t,n){function r(){o.newEvent.activities.push(o.activities,o.activities1,o.activities2),o.newEvent.substances.push(o.substances,o.substances1,o.substances2);var e=[],r=[];o.newEvent.whodisliked.forEach(function(t){t&&e.push(t)}),o.newEvent.wholiked.forEach(function(e){e&&r.push(e)}),o.newEvent.whodisliked=e,o.newEvent.wholiked=r,console.log("new event",o.newEvent),n.save(o.newEvent,function(){t.go("eventIndex")})}var o=this;o.newEvent={},o.activities={name:void 0,type:void 0},o.activities1={name:void 0,type:void 0},o.activities2={name:void 0,type:void 0},o.substances={name:void 0,type:void 0},o.substances1={name:void 0,type:void 0},o.substances2={name:void 0,type:void 0},o.newEvent.activities=[],o.newEvent.substances=[],o.newEvent.friends=[],o.newEvent.wholiked=[],o.newEvent.whodisliked=[],o.submit=r}function Friend(e){return new e("/friends/:id",{id:"@_id"},{update:{method:"PUT"}})}function FriendIndexController(e,t,n,r){var o=this;o.all=r.query(),console.log("all friends",o.all)}function FriendShowController(e,t,n,r){var o=this;r.get(n.params,function(e){o.friend=e,console.log("this friend",o.friend)})}function NewFriendFormController(e,t,n){function r(){o.newFriend.hobbies.push(o.hobbies),o.newFriend.interests.push(o.interests),o.newFriend.contact=o.contact,console.log("new friend",o.newFriend),n.save(o.newFriend,function(){t.go("friendIndex")})}var o=this;o.newFriend={},o.newFriend.hobbies=[],o.newFriend.interests=[],o.contact={email:void 0,phone:void 0},o.hobbies={name:void 0,type:void 0},o.interests={name:void 0,type:void 0},o.sign={asc:void 0,sun:void 0,moon:void 0,mercury:void 0,venus:void 0},o.newFriend.user=e.getPayload()._id,o.submit=r}function Location(e){return new e("/locations/:id",{id:"@_id"},{update:{method:"PUT"}})}function MainController(e,t,n,r,o){function i(){e.logout().then(function(){t.go("friendIndex")})}function l(n,r){a.menuVisible=!1,a.message=null,console.log(r,n),!e.isAuthenticated()&&u.includes(r.name)&&(n.preventDefault(),a.message="You must be logged in to go there!",t.go("login"))}function s(){a.menuVisible=!a.menuVisible}var a=this;a.isLoggedIn=e.isAuthenticated,a.message=null,a.menuVisible=!1,r.get({id:e.getPayload()._id},function(e){a.user=e,console.log("current user",a.user)}),a.allFriends=o.query();var u=[];n.$on("$stateChangeStart",l),a.logout=i,a.toggleMenu=s}function User(e){return new e("/users/:id",{id:"@_id"},{update:{method:"PUT"}})}function UserFormController(e,t,n){function r(){o.user.hobbies.push(o.hobbies),o.user.interests.push(o.interests),o.user.allies=o.allies,o.user.allies=o.enemies,console.log("data to be saved",o.user,"user object hobbies",o.user.hobbies,"user object interests",o.user.interests,"user object sign",o.user.sign),o.user.$update(function(){console.log("post update your data",o.user),n.go("userShow")})}var o=this;o.hobbies={name:void 0,type:void 0},o.interests={name:void 0,type:void 0},o.sign={asc:void 0,sun:void 0,moon:void 0,mercury:void 0,venus:void 0},o.allies=[],o.enemies=[],o.user=t.get({id:e.getPayload()._id}),o.submit=r}function UserShowController(e,t,n,r){var o=this;r.get({id:e.getPayload()._id},function(e){o.user=e,console.log("showing user",o.user)})}angular.module("FriendManagerApp",["ngAnimate","ngResource","ui.router","satellizer","angular-carousel","chart.js"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("FriendManagerApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state","$window"],LoginController.$inject=["$auth","$state","User"],angular.module("FriendManagerApp").factory("Event",Event),Event.$inject=["$resource"],angular.module("FriendManagerApp").controller("NewEventFormController",NewEventFormController).controller("EventIndexController",EventIndexController).controller("EventShowController",EventShowController),EventIndexController.$inject=["$auth","$state","Event"],EventShowController.$inject=["$auth","User","$state","Event"],NewEventFormController.$inject=["$auth","$state","Event"],angular.module("FriendManagerApp").factory("Friend",Friend),Friend.$inject=["$resource"],angular.module("FriendManagerApp").controller("FriendIndexController",FriendIndexController).controller("FriendShowController",FriendShowController).controller("NewFriendFormController",NewFriendFormController),FriendIndexController.$inject=["$auth","User","$state","Friend"],FriendShowController.$inject=["$auth","User","$state","Friend"],NewFriendFormController.$inject=["$auth","$state","Friend"],angular.module("FriendManagerApp").factory("Location",Location),Location.$inject=["$resource"],angular.module("FriendManagerApp").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User","Friend"],angular.module("FriendManagerApp").factory("User",User),User.$inject=["$resource"],angular.module("FriendManagerApp").controller("UserFormController",UserFormController).controller("UserShowController",UserShowController),UserFormController.$inject=["$auth","User","$state"],UserShowController.$inject=["$auth","$state","$rootScope","User"];
//# sourceMappingURL=app.js.map
