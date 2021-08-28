app.controller("userscontroller", [
  "$scope",
  "user",
  "Translate",
  "$rootScope",
  "$state",
  function ($scope, user, Translate, $rootScope, $state) {
    $scope.usersdata = [];
    $scope.roles = [];
    $scope.userform = {};
    $scope.lang = $rootScope.lang;

    $scope.Translate = Translate;

    getusersdataForAdmin();
    getroles();
    function getusersdataForAdmin() {
      user.getallusers().then(function (res) {
        $scope.usersdata = res.data;
      });
    }
    function getroles() {
      user.getallroles().then(function (res) {
        $scope.roles = res.data;
      });
    }
    $scope.submit = function (data) {
      console.log(data);
      user.adduser(data).then(function (res) {
        $state.go("menu.users");
      });
    };

    $scope.updateuser = function (data) {
      user.updateuser(data).then(function (res) {
        $state.go("menu.users");
      });
    };

    $scope.filldata = function (data) {
      $rootScope.edituser = {
        email: data.email,
        id: data.id,
        isActive: data.isActive,
        phoneNumber: data.phone,
        roles: data.roles,
        userName: data.userName,
      };
      $state.go("menu.edituser");
    };
  },
]);
