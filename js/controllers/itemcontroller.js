app.controller("itemcontroller", [
  "$scope",
  "Translate",
  "$timeout",
  "item",
  "accounts",
  "$state",
  "$rootScope",
  "Helpers",
  function (
    $scope,
    Translate,
    $timeout,
    item,
    accounts,
    $state,
    $rootScope,
    Helpers
  ) {
    $scope.Translate = Translate;
    $scope.active = "";
    $scope.makeActive = function (item) {
      $scope.active = $scope.active == item ? "" : item;
    };
    $scope.init = function () {
      getcategorie();
      getstores();
      getallaccounts();
      getproducts();
      data();
    };
    $scope.check = {
      productName: true,
      description: true,
      productionDate: true,
      expirationDate: true,
      units: false,
      defaultSelling: true,
      defaultPurchasing: true,
      store: true,
      category: true,
      stock: true,
      demandLimit: false,
      productCode: true,

      size: 0,

      amount: false,
      productImage: false,
      unitFirstStock: false,
    };

    function data() {
      $("#myTable").DataTable();
    }

    function getproducts() {
      item.getallproductReq().then(function (res) {
        $scope.products = res.data;
      });
    }
    function getcategorie() {
      item.getallcategoryReq().then(function (res) {
        $scope.categories = res.data;
      });
    }

    function getstores() {
      item.getallstoreReq().then(function (res) {
        $scope.stores = res.data;
      });
    }
    function getallaccounts() {
      accounts.getaccountReq().then(function (res) {
        $scope.accounts = res.data;
      });
    }
    $timeout($scope.init);

    $scope.selectedunit = {
      unitName: "select unitfiststock",
      purchasingprice: 0,
      sellingprice: 0,
      defaultSelling: true,
      defaultPurchasing: true,
      bareCode: 0,
    };
    $scope.selectedunitindex = 0;
    $scope.productform = {
      productName: "string",
      description: "string",
      productionDate: new Date(),
      expirationDate: new Date(),
      unitViewModels: [
        {
          unitName: "string",
          purchasingprice: 0,
          sellingprice: 0,
          defaultSelling: true,
          defaultPurchasing: true,
          bareCode: 0,
        },
      ],
      storeId: 0,
      categoryId: 0,
      accountIdstore: 0,
      stock: 0,
      demandLimit: 0,
      productCode: "string",
      isExpiration: true,
      size: 0,
      wiedth: 0,
      hiegth: 0,
      elevation: 0,
      accountId: 0,
      accountIdstore: 0,
      amount: 0,
      productImage: "string",
      unitFirstStock: "string",
    };

    $scope.addrow = function () {
      var a = {
        unitName: "string",
        purchasingprice: 0,
        sellingprice: 0,
        defaultSelling: true,
        defaultPurchasing: true,
        bareCode: 0,
      };
      $scope.productform.unitViewModels.push(a);
      $scope.editproduct.unitViewModels.push(a);
    };
    $scope.removerow = function (row) {
      console.log(row);
      delete $scope.productform.unitViewModels[row];
    };

    $scope.addproduct = function (data) {
      item.addproductReq(data).then(function (res) {
        //handle
        alert(res.data.message);
      });
    };
    $scope.addcategory = function (data) {
      item.addcategoryReq(data).then(function (res) {
        //handle

        alert(res.data.message);
        getcategorie();
      });
    };
    $scope.addstore = function (data) {
      item.addstoreReq(data).then(function (res) {
        //handle
        alert(res.data.message);
        getstores();
      });
    };

    //calc amount
    $scope.calcamount = function (data) {
      $scope.selectedunit = data;
      $scope.productform.amount =
        $scope.productform.stock * $scope.selectedunit.purchasingprice;
      $scope.productform.unitFirstStock = $scope.selectedunit.unitName;
    };
    $rootScope.calcamountedit = function (data) {
      $scope.selectedunit = data;
      $rootScope.editproduct.amount =
        $rootScope.editproduct.stock * $scope.selectedunit.purchasingprice;
      $rootScope.editproduct.unitFirstStock = $scope.selectedunit.unitName;
    };

    $scope.filldata = function (data) {
      $rootScope.editproduct = {
        id: data.id,
        productName: data.productName,
        description: data.description,
        productionDate: data.productionDate,
        expirationDate: data.expirationDate,
        unitViewModels: data.units,
        storeId: data.storeId,
        categoryId: data.categoryId,
        accountIdstore: data.accountIdstore,
        stock: data.stock,
        demandLimit: data.demandLimit,
        productCode: data.productCode,
        isExpiration: data.isExpiration,
        size: 0,
        wiedth: data.wiedth,
        hiegth: data.hiegth,
        elevation: data.elevation,
        accountId: data.accountId,
        amount: data.amount,
        productImage: data.productImage,
        unitFirstStock: data.unitFirstStock,
      };
      $state.go("menu.updateitem");
    };

    $scope.updateproduct = function (data) {
      item.updateproductReq(data).then(function (res) {
        if (res.data.issuccessd) {
          Helpers.showToaster(res.data.message);
          $state.go("menu.items");
        } else {
          Helpers.showErrorMessage(res.data.message);
        }
      });
    };
  },
]);
