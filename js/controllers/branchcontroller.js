app.controller("branchcontroller", [
  "$scope",
  "company",
  "Translate",
  "$timeout",
  "$state",
  "$rootScope",
  "$location",
  function (
    $scope,
    company,
    Translate,
    $timeout,
    $state,
    $rootScope,
    $location
  ) {
    // $scope.currencies={}
    $scope.init = function () {
      company.getbranchesbyuserIdReq().then(function (res) {
        $scope.branches = res.data;
      });
      $scope.Translate = Translate;
    };

    $timeout($scope.init);

    $scope.addbranch = function (data) {
      company.addbranchREQ(data).then(function (res) {
        if (res.status == 200) {
          alert("branch add success");
          $location.path("/#/menu/dashboard");
          // $state.go("menu.dashboard");
        }
      });
    };

    $scope.filldata = function (data) {
      $rootScope.editbranch = {
        branchName: data.branchName,
        branchId: data.branchId,
        address: data.address,
        phoneNumber: data.phoneNumber,
        landNumber: data.landNumber,
        email: data.email,
        companyId: data.companyId,
      };
      $state.go("menu.editbranch");
    };

    $scope.updatebranch = function (data) {
      company.updatebranchReq(data).then(function (res) {
        alert("branch update success");
        $state.go("menu.branches");
      });
    };
  },
]);
