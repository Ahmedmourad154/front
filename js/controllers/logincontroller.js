app.controller(
  "loginCtrl",
  function ($scope, $rootScope, API, $state, $stateParams, Helpers, Translate) {
    $rootScope.lang = localStorage.lang ? localStorage.lang : "rtl";
    $scope.login = function () {
      var req = {
        url: "Account/login",
        method: "post",
        data: $scope.user,
      };
      API.execute(req)
        .then(function (_res) {
          if (_res.status == 200) {
            localStorage.userObj = _res.data.token;
            Helpers.showToaster(_res.data.message);
            $state.go("menu.dashboard");
          } else {
            Helpers.ShowError(Translate[$rootScope.lang].MSG_WENT_WRONG);
          }
        })
        .catch(function (_ex) {
          if (_ex.status == 404) {
            Helpers.showErrorMessage(
              Translate[$rootScope.lang].MSG_Login_Failed
            );
          } else if (_ex.status == 400) {
            Helpers.showErrorMessage(_ex.data.message);
          } else {
            console.log(Translate[$rootScope.lang]);
            console.log($rootScope.lang);
            Helpers.ShowError(Translate[$rootScope.lang].MSG_WENT_WRONG);
          }
        });
    };
    $scope.sendEmail = function (data) {
      var req = {
        url: "Account/forgetpassword/" + data,
        method: "post",
      };
      API.execute(req)
        .then(function (_res) {
          if (_res.status == 200) {
            Helpers.showToaster(_res.data.message);
            $state.go("successSubmitForm");
          } else {
            Helpers.showErrorMessage(_res.data.message);
          }
        })

        .catch(function (_ex) {
          if (_ex.status == 404) {
            Helpers.showErrorMessage(_ex.data.message);
          } else if (_ex.status == 400) {
            Helpers.showErrorMessage(_ex.data.message);
          } else {
            console.log(_ex);
            Helpers.showErrorMessage(Translate[$rootScope.lang].MSG_WENT_WRONG);
          }
        });
    };
  }
);
