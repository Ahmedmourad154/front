app.controller("SuppliersController", [
    "$scope",
    "supplier",
    "Translate",
    "$rootScope",
    "$state",
    "Helpers",
    "$stateParams",
    function ($scope, supplier, Translate, $rootScope, $state,Helpers,$stateParams)
    {
        $scope.supplierData = [];
        $scope.lang = $rootScope.lang;
        $scope.Translate = Translate;
        getSupplierData()
        function getSupplierData() {
            supplier.getAllSuppliers().then(function (res) {
            $scope.supplierData = res.data;
          });
        }
       
        $scope.addSupplier=function (data) {
          console.log(data);
          
          supplier.addSupplier(data).then(function(res) {
            Helpers.showToaster(res.data.message);
            $state.go("menu.suppliers");
          },(_ex)=>{
            Helpers.showErrorMessage(_ex.data.message)
          })
         
        }
        $scope.filldata = function (data) {
          $rootScope.editSupplier = {
            id: data.id,
            supplierName:data.supplierName,
            email: data.email,        
            fax: data.fax,
            phoneNumber: data.phoneNumber,
            homeMobile:data.homeMobile,
            address:data.address,  
            discount:data.discount
          };
          $state.go("menu.editSupplier");
        };
        $scope.updateSupplier = function (data,id) {
            supplier.updateSupplier(data,id).then(function (res) {
            Helpers.showToaster(res.data.message);

            $state.go("menu.suppliers");
          });
        };
    }
])