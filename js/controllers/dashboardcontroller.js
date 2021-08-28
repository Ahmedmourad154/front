app.controller(
  "dashboardCtrl",
  function ($scope, $rootScope, API, $state, Helpers, Translate) {
    $rootScope.ativetab = "dashboard";

    $scope.Translate = Translate;
  }
);
