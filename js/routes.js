app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("login", {
      url: "/login",
      views: {
        "": {
          templateUrl: "views/login.html",
          controller: "loginCtrl",
        },
      },
    })
    .state("confirmEmail",{
      url:"/confirmEmail",
      templateUrl: "views/confirmEmail.html",
      controller: "loginCtrl",    
    }).state("successSubmitForm",{
      url:"/successSubmitForm",
      templateUrl: "views/successSubmitForm.html",
    })
    .state("rest-password", {
      url: "/reset-password",
      templateUrl: "views/reset-password.html",
      controller: "resetPasswordCtrl",
    })
    // menu
    .state("menu", {
      url: "/menu",
      abstract: true,
      templateUrl: "views/menu.html",
      controller: "menuCtrl",
      css: "css/custonsidebar.css",
    })
    .state("menu.dashboard", {
      url: "/dashboard",
      views: {
        pageContent: {
          templateUrl: "views/dashboard.html",
          controller: "dashboardCtrl",
        },
      },
    })
    .state("menu.users", {
      url: "/users",
      views: {
        pageContent: {
          templateUrl: "views/users.html",
          controller: "userscontroller",
        },
      },
    })
    .state("menu.adduser", {
      url: "/adduser",
      views: {
        pageContent: {
          templateUrl: "views/adduser.html",
          controller: "userscontroller",
        },
      },
    })
    .state("menu.roles", {
      url: "/roles",
      views: {
        pageContent: {
          templateUrl: "views/roles.html",
          controller: "rolescontroller",
        },
      },
    })
    .state("menu.customers", {
      url: "/customers",
      views: {
        pageContent: {
          templateUrl: "views/admin/customers.html",
          controller: "CustomersController",
        },
      },
    })
    .state("menu.addCustomer", {
      url: "/addCustomer",
      views: {
        pageContent: {
          templateUrl: "views/admin/addCustomer.html",
          controller: "CustomersController",
        },
      },
    })
    .state("menu.editCustomer",{
      url:"/editCustomer",
      views:{
        pageContent:{
          templateUrl:"views/admin/editCustomer.html",
          controller:"CustomersController"
        }
      }
    })
    .state("menu.suppliers",{
      url:"/suppliers",
      views:{
        pageContent:{
          templateUrl:"views/admin/suppliers.html",
          controller:"SuppliersController"
        }
      }
    })
    .state("menu.addSupplier",{
      url:"/addSupplier",
      views:{
        pageContent:{
          templateUrl:"views/admin/addSupplier.html",
          controller:"SuppliersController"
        }
      }
    })
    .state("menu.editSupplier",{
      url:"/editSupplier",
      views:{
        pageContent:{
          templateUrl:"views/admin/editSupplier.html",
          controller:"SuppliersController"
        }
      }
    })
    


    .state("menu.edituser", {
      url: "/edituser",
      views: {
        pageContent: {
          templateUrl: "views/edituser.html",
          controller: "userscontroller",
        },
      },
    })
    .state("menu.addcompany", {
      url: "/addcompany",
      views: {
        pageContent: {
          templateUrl: "views/admin/addcompany.html",
          controller: "companycontroller",
        },
      },
    })
    .state("menu.company", {
      url: "/company",
      views: {
        pageContent: {
          templateUrl: "views/admin/company.html",
          controller: "companycontroller",
        },
      },
    })
    .state("menu.editcompany", {
      url: "/editcompany",
      views: {
        pageContent: {
          templateUrl: "views/admin/editcompany.html",
          controller: "companycontroller",
        },
      },
    })
    .state("menu.addbranch", {
      url: "/addbranch",
      views: {
        pageContent: {
          templateUrl: "views/admin/addbranch.html",
          controller: "branchcontroller",
        },
      },
    })
    .state("menu.editbranch", {
      url: "/editbranch/:id",
      views: {
        pageContent: {
          templateUrl: "views/admin/editbranch.html",
          controller: "branchcontroller",
        },
      },
    })
    .state("menu.branches", {
      url: "/branches",
      views: {
        pageContent: {
          templateUrl: "views/admin/branch.html",
          controller: "branchcontroller",
        },
      },
    })
    .state("menu.manageroles", {
      url: "/manageroles/:id",
      views: {
        pageContent: {
          templateUrl: "views/manageroles.html",
          controller: "rolepermissioncontroller",
        },
      },
    })
    .state("menu.items", {
      url: "/items",
      views: {
        pageContent: {
          templateUrl: "views/user/items/items.html",
          controller: "itemcontroller",
        },
      },
    })
    .state("menu.additem", {
      url: "/additem",
      views: {
        pageContent: {
          templateUrl: "views/user/items/additem.html",
          controller: "itemcontroller",
        },
      },
    })
    .state("menu.updateitem", {
      url: "/updateitem",
      views: {
        pageContent: {
          templateUrl: "views/user/items/edititem.html",
          controller: "itemcontroller",
        },
      },
    });
});
