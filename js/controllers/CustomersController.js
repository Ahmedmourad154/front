app.controller("CustomersController", [
    "$scope",
    "customer",
    "Translate",
    "$rootScope",
    "$state",
    "Helpers",
    "$stateParams",
    function ($scope, customer, Translate, $rootScope, $state,Helpers,$stateParams)
    {
        $scope.customerData = [];
        $scope.customerForm = {};
        $scope.lang = $rootScope.lang;
        $scope.Translate = Translate;
        getCustomerData() 
        function getCustomerData() {
          customer.getAllCustomers().then(function (res) {
            $scope.customerData = res.data;
          });
        }
       
        $scope.addCustomer=function (data) {
          console.log(data);
          
          customer.addCustomer(data).then(function(res) {
            Helpers.showToaster(res.data.message);
            $state.go("menu.customers");
          },(_ex)=>{
            Helpers.showErrorMessage(_ex.data.message)
          })
         
        }
        $scope.filldata = function (data) {
          $rootScope.editCustomer = {
            id: data.id,
            personName:data.personName,
            email: data.email,        
            fax: data.fax,
            phoneNumber: data.phoneNumber,
            homeMobile:data.homeMobile,
            address:data.address,  
            discount:data.discount
          };
          $state.go("menu.editCustomer");
        };
        $scope.updateCustomer = function (data,id) {
          customer.updateCustomer(data,id).then(function (res) {
            Helpers.showToaster(res.data.message);

            $state.go("menu.customers");
          });
        };
    }
])