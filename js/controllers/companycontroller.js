app.controller("companycontroller", [
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
    $scope.Translate = Translate;
    // $scope.currencies={}
    $scope.init = function () {
      company.getcurrencies().then(function (res) {
        $scope.currencies = res.data;
      });
      company.getcompanyByUserIdReq().then(function (res) {
        $scope.mycompany = res.data;
      });
    };

    $timeout($scope.init);

    $scope.addcompany = function (data) {
      console.log(data);
      company.addcompanyReq(data).then(function (res) {
        console.log(res);
        if (res.status == 200) {
          alert("add success");
          $state.go("menu.addbranch");
        }
      });
    };

    $scope.getallcurrencies = function () {
      company.getcurrencies().then(function (res) {
        $scope.currencies = res.data;
      });
    };
    $scope.filldata = function (data) {
      $rootScope.editcompany = {
        companyName: data.companyName,
        comActivity: data.comActivity,
        comRegNo: data.comRegNo,
        taxCard: data.taxCard,
        address: data.address,
        phoneNumber: data.phoneNumber,
        landNumber: data.landNumber,
        email: data.email,
        website: data.website,
        country: data.country,
        companyLogo: data.companyLogo,
        companyId: data.companyId,
      };
      $state.go("menu.editcompany");
    };
    $scope.updatecompany = function (data) {
      console.log(data);
      company.updatecomapnyReq(data).then(function (res) {
        alert(res.data.message);
        $location.path("/#/menu/dashboard");
        // $state.go("menu.dashboard");
      });
    };
  },
]);
