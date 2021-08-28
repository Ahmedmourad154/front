app.factory("item", [
  "API",
  function (API) {
    return {
      addproductReq: addproductReq,
      addcategoryReq: addcategoryReq,
      addstoreReq: addstoreReq,
      getallstoreReq: getallstoreReq,
      getallcategoryReq: getallcategoryReq,
      getallproductReq: getallproductReq,
      updateproductReq: updateproductReq,
    };

    function addproductReq(data) {
      var req = {
        url: "Product/AddProduct",
        method: "POST",
        data: data,
      };
      return API.execute(req);
    }

    function getallproductReq() {
      var req = {
        url: "Product/GetProductsByBranch",
        method: "GET",
      };
      return API.execute(req);
    }

    function addcategoryReq(data) {
      var req = {
        url: "Category/AddCategory",
        method: "POST",
        data: data,
      };
      return API.execute(req);
    }
    function addstoreReq(data) {
      var req = {
        url: "Store/AddStore",
        method: "POST",
        data: data,
      };
      return API.execute(req);
    }

    function getallcategoryReq() {
      var req = {
        url: "Category/GetCategoriesByBranch",
        method: "GET",
      };
      return API.execute(req);
    }

    function getallstoreReq() {
      var req = {
        url: "Store/GetStoresByBranch",
        method: "GET",
      };
      return API.execute(req);
    }

    function updateproductReq(data) {
      var req = {
        url: "Product/UpdateProduct",
        method: "PUT",
        params: { productId: data.id },
        data: data,
      };
      return API.execute(req);
    }
  },
]);
