"use strict";function Router(e,t){e.state("test",{url:"/test",templateUrl:"/templates/test.html"}).state("login",{url:"/",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("friendIndex",{url:"/friendIndex",templateUrl:"/templates/friendIndex.html",controller:"friendController as friendIndex"}),t.otherwise("/")}function Auth(e){e.loginUrl="/login",e.signupUrl="/register",e.tokenPrefix=""}function RegisterController(e,t,n){function r(){e.signup(o.user).then(function(e){n.localStorage.setItem("token",e.data.token),t.go("test")})}var o=this;o.submit=r}function LoginController(e,t,n){function r(){e.login(i.credentials).then(function(){n.get({id:e.getPayload()._id},function(e){i.user=e,console.log("you",i.user),console.log("is this your first time",i.user.isFirstTime),i.user.isFirstTime&&t.go("test")})})}function o(n){e.authenticate(n).then(function(e){console.log(e),t.go("test")})}var i=this;i.credentials={},i.submit=r,i.authenticate=o}function Event(e){return new e("/events/:id",{id:"@_id"},{update:{method:"PUT"}})}function Friend(e){return new e("/friends/:id",{id:"@_id"},{update:{method:"PUT"}})}function Location(e){return new e("/locations/:id",{id:"@_id"},{update:{method:"PUT"}})}function MainController(e,t,n){function r(){e.logout().then(function(){t.go("friendIndex")})}function o(n,r){l.menuVisible=!1,l.message=null,console.log(r,n),!e.isAuthenticated()&&a.includes(r.name)&&(n.preventDefault(),l.message="You must be logged in to go there!",t.go("login"))}function i(){l.menuVisible=!l.menuVisible}var l=this;l.isLoggedIn=e.isAuthenticated,l.message=null,l.menuVisible=!1;var a=["friendIndex"];n.$on("$stateChangeStart",o),l.logout=r,l.toggleMenu=i}function User(e){return new e("/users/:id",{id:"@_id"},{update:{method:"PUT"}})}angular.module("FriendManagerApp",["ngAnimate","ngResource","ui.router","satellizer","angular-carousel","chart.js"]).config(Router).config(Auth),Router.$inject=["$stateProvider","$urlRouterProvider"],Auth.$inject=["$authProvider"],angular.module("FriendManagerApp").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state","$window"],LoginController.$inject=["$auth","$state","User"],angular.module("FriendManagerApp").factory("Event",Event),Event.$inject=["$resource"],angular.module("FriendManagerApp").factory("Friend",Friend),Friend.$inject=["$resource"],angular.module("FriendManagerApp").factory("Location",Location),Location.$inject=["$resource"],angular.module("FriendManagerApp").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("FriendManagerApp").factory("User",User),User.$inject=["$resource"];
//# sourceMappingURL=app.js.map
