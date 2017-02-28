"use strict";function Router(e,r){e.state("test",{url:"/test",templateUrl:"/templates/test.html"}).state("login",{url:"/",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("userForm",{url:"/userForm",templateUrl:"/templates/userForm.html",controller:"UserFormController as userForm"}).state("userShow",{url:"/userShow",templateUrl:"/templates/userShow.html",controller:"UserShowController as userShow"}).state("newFriendForm",{url:"/newFriendForm",templateUrl:"/templates/newFriendForm.html",controller:"NewFriendFormController as newFriendForm"}).state("friendIndex",{url:"/friendIndex",templateUrl:"/templates/friendIndex.html",controller:"FriendIndexController as friendIndex"}).state("friendShow",{url:"/friend/:id",templateUrl:"/templates/friendShow.html",controller:"FriendShowController as friendShow"}).state("newEventForm",{url:"/newEventForm",templateUrl:"/templates/newEventForm.html",controller:"NewEventFormController as newEventForm"}).state("eventIndex",{url:"/eventIndex",templateUrl:"/templates/eventIndex.html",controller:"EventIndexController as eventIndex"}),r.otherwise("/")}function Auth(e){e.loginUrl="/login",e.signupUrl="/register",e.tokenPrefix=""}function RegisterController(e,r,t){function n(){e.signup(o.user).then(function(e){t.localStorage.setItem("token",e.data.token),r.go("userForm")})}var o=this;o.submit=n}function LoginController(e,r,t){function n(){e.login(i.credentials).then(function(){r.go("test")})}function o(t){e.authenticate(t).then(function(e){console.log(e),r.go("test")})}var i=this;i.credentials={},i.submit=n,i.authenticate=o}function Event(e){return new e("/events/:id",{id:"@_id"},{update:{method:"PUT"}})}function NewEventFormController(e,r,t){function n(){o.newEvent.activities.push(o.activities),console.log("new event",o.newEvent),t.save(o.newEvent,function(){r.go("eventIndex")})}var o=this;o.newEvent={},o.activities={name:void 0,type:void 0},o.newEvent.activities=[],o.submit=n}function Friend(e){return new e("/friends/:id",{id:"@_id"},{update:{method:"PUT"}})}function FriendIndexController(e,r,t,n){var o=this;o.all=n.query(),console.log("all friends",o.all)}function FriendShowController(e,r,t,n){var o=this;n.get(t.params,function(e){o.friend=e,console.log("this friend",o.friend)})}function NewFriendFormController(e,r,t){function n(){o.newFriend.hobbies.push(o.hobbies),o.newFriend.interests.push(o.interests),o.newFriend.contact=o.contact,console.log("new friend",o.newFriend),t.save(o.newFriend,function(){r.go("friendIndex")})}var o=this;o.newFriend={},o.newFriend.hobbies=[],o.newFriend.interests=[],o.contact={email:void 0,phone:void 0},o.hobbies={name:void 0,type:void 0},o.interests={name:void 0,type:void 0},o.sign={asc:void 0,sun:void 0,moon:void 0,mercury:void 0,venus:void 0},o.newFriend.user=e.getPayload()._id,o.submit=n}function Location(e){return new e("/locations/:id",{id:"@_id"},{update:{method:"PUT"}})}function MainController(e,r,t,n,o){function i(){e.logout().then(function(){r.go("friendIndex")})}function l(t,n){a.menuVisible=!1,a.message=null,console.log(n,t),!e.isAuthenticated()&&u.includes(n.name)&&(t.preventDefault(),a.message="You must be logged in to go there!",r.go("login"))}function s(){a.menuVisible=!a.menuVisible}var a=this;a.isLoggedIn=e.isAuthenticated,a.message=null,a.menuVisible=!1,n.get({id:e.getPayload()._id},function(e){a.user=e,console.log("current user",a.user)}),a.allFriends=o.query();var u=[];t.$on("$stateChangeStart",l),a.logout=i,a.toggleMenu=s}function User(e){return new e("/users/:id",{id:"@_id"},{update:{method:"PUT"}})}function UserFormController(e,r,t){function n(){o.user.hobbies.push(o.hobbies),o.user.interests.push(o.interests),console.log("data to be saved",o.user,"user object hobbies",o.user.hobbies,"user object interests",o.user.interests,"user object sign",o.user.sign),o.user.$update(function(){console.log("post update your data",o.user),t.go("userShow")})}var o=this;o.hobbies={name:void 0,type:void 0},o.interests={name:void 0,type:void 0},o.sign={asc:void 0,sun:void 0,moon:void 0,mercury:void 0,venus:void 0},o.user=r.get({id:e.getPayload()._id}),o.submit=n}function UserShowController(e,r,t,n){var o=this;n.get({id:e.getPayload()._id},function(e){o.user=e,console.log("showing user",o.user)})}angular.module("FriendManagerApp",["ngAnimate","ngResource","ui.router","satellizer","angular-carousel","chart.js"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("FriendManagerApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state","$window"],LoginController.$inject=["$auth","$state","User"],angular.module("FriendManagerApp").factory("Event",Event),Event.$inject=["$resource"],angular.module("FriendManagerApp").controller("NewEventFormController",NewEventFormController),NewEventFormController.$inject=["$auth","$state","Event"],angular.module("FriendManagerApp").factory("Friend",Friend),Friend.$inject=["$resource"],angular.module("FriendManagerApp").controller("FriendIndexController",FriendIndexController).controller("FriendShowController",FriendShowController).controller("NewFriendFormController",NewFriendFormController),FriendIndexController.$inject=["$auth","User","$state","Friend"],FriendShowController.$inject=["$auth","User","$state","Friend"],NewFriendFormController.$inject=["$auth","$state","Friend"],angular.module("FriendManagerApp").factory("Location",Location),Location.$inject=["$resource"],angular.module("FriendManagerApp").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User","Friend"],angular.module("FriendManagerApp").factory("User",User),User.$inject=["$resource"],angular.module("FriendManagerApp").controller("UserFormController",UserFormController).controller("UserShowController",UserShowController),UserFormController.$inject=["$auth","User","$state"],UserShowController.$inject=["$auth","$state","$rootScope","User"];
//# sourceMappingURL=app.js.map
