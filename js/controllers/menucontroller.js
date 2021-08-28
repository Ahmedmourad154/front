app.controller(
  "menuCtrl",
  function ($scope, $rootScope, $state, Translate, $timeout) {
    $rootScope.lang = "rtl";

    // when you add new sidebar item you must check userrole on it
    $scope.init = function () {
      $scope.Translate = Translate;
      $rootScope.userrole = JSON.parse(
        window.atob(localStorage.userObj.split(".")[1])
      ).roles;
    };

    $timeout($scope.init, 10);

    $scope.active = "";
    $scope.makeActive = function (item) {
      $scope.active = $scope.active == item ? "" : item;
    };
    $scope.toggleside = function ($event) {
      var a = document.getElementsByClassName("nk-sidebar");
      var content = document.getElementsByClassName("nk-content");
      console.log(a);
      $event.currentTarget.classList.toggle("toggle-active");
      a[0].classList.toggle("nk-sidebar-active");
      console.log(content);

      content[0].classList.toggle("mytoggleside");
    };
    $rootScope.toggledark = function () {
      var element = document.getElementById("myDIV");
      element.classList.toggle("nk-body");
      element.classList.toggle("dark-mode");
    };
    //   $rootScope.arabiclang = function () {
    //     $rootScope.lang = "rtl";
    //     var element = document.getElementById("myDIV");
    //     element.toggleAttribute("dir", "rtl");
    //   };
    //   $rootScope.englishlang = function () {
    //     $rootScope.lang = "ltr";
    //     var element = document.getElementById("myDIV");
    //     element.toggleAttribute("dir", "ltr");
    //   };
    $scope.logout = function () {
      localStorage.removeItem("userObj");
      $state.go("login");
    };
  }
);
