app.controller('rolepermissioncontroller', ['$scope', 'roles','$stateParams','$state','$timeout', function ($scope, roles,$stateParams, $state,$timeout) {
    roles.GetAllPermissions($stateParams.id).then(function(response){
        $scope.permissions=response.data
      })
      $scope.updatePermission=function(data){
          roles.AddRolePermission(data).then(function(){

            $state.go('menu.roles')

          })
      }
}])
