angular.module('templates-app', ['error/error.tpl.html', 'home/home.tpl.html', 'private/private.tpl.html']);

angular.module("error/error.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("error/error.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Error</h1>\n" +
    "  <div ng-switch=\"$stateParams.error\">\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"unauthorized\">You are not authorized</p>\n" +
    "    <p class=\"text-danger\" ng-switch-when=\"401\">You are not authorized</p>\n" +
    "    <p class=\"text-danger\" ng-switch-default>Some error has occurred</p>\n" +
    "  </div ng-switch>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>This is home!</h1>\n" +
    "  <p>Everybody can access this page, for the following pages use:</p>\n" +
    "  <p class=\"text-info\">username: johnm, password: hello, permission: user</p>\n" +
    "  <p class=\"text-danger\">username: sandrab, password: world, permission: admin</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("private/private.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("private/private.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1 class=\"text-danger\">This is your private data!</h1>\n" +
    "  <p>The passwords of your Chrome browser are...</p>\n" +
    "</div>\n" +
    "");
}]);
