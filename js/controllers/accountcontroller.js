app.controller(
  "accountcontroller",
  function (
    $scope,
    accounts,
    Translate,
    $timeout,
    $state,
    $rootScope,
    $location
  ) {
    $scope.Translate = Translate;
    // $scope.currencies={}
    $scope.init = function () {};

    $timeout($scope.init);
  }
);
