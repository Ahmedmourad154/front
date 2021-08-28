app.controller("rolescontroller", [
    "$scope",
    "roles",
    "Translate",
    "$rootScope",
    "$state",
    "$stateParams",
    
    function ($scope, roles, Translate, $rootScope,$stateParams) {
      $scope.roles = [];
      $scope.Translate = Translate;
      getroles();
      function getroles() {
        roles.getallroles().then(function (res) {
          $scope.roles = res.data;
        });
      }
      $scope.addRole = function (data) {
        roles.addRole(data).then(function (res) {
          getroles();
     
        });
      
      };
      $scope.deleteRole = function (data) {
      
        roles.deleteRole(data).then(function (res) {
           
          getroles();
        });
      
      };
     
    },
  ]);
  