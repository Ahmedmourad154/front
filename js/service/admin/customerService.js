app.factory("customer", [
    "API",
    function (API) {
      return {
        getAllCustomers: getAllCustomers,
        addCustomer: addCustomer,
        updateCustomer: updateCustomer,
      };
  
      function getAllCustomers() {
        var req = {
          url: "Customer/GetCustomersByBranch",
          method: "GET",
        };
        return API.execute(req);
      }
  
    
  
      function addCustomer(data) {
        var req = {
          url: "Customer/AddCustomer",
          method: "POST",
          data: data,
        };
        return API.execute(req);
      }
  
      function updateCustomer(data,id) {
        var req = {
          url: "Customer/UpdateCustomer/"+id,
          method: "PUT",
          data: data,
        };
        return API.execute(req);
      }
    },
  ]);
  