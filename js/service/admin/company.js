app.factory("company", [
  "API",
  function (API) {
    return {
      addcompanyReq: addcompanyReq,
      getcurrencies: getcurrencies,
      addbranchREQ: addbranchREQ,
      getbranchesbyuserIdReq: getbranchesbyuserIdReq,
      updatebranchReq: updatebranchReq,
      getcompanyByUserIdReq: getcompanyByUserIdReq,
      updatecomapnyReq: updatecomapnyReq,
    };

    function addcompanyReq(data) {
      var req = {
        url: "Company/Add",
        method: "POST",
        data: data,
      };
      return API.execute(req);
    }

    function getcurrencies() {
      var req = {
        url: "Currency/GetCurrencies",
        method: "GET",
      };
      return API.execute(req);
    }

    function addbranchREQ(data) {
      var req = {
        url: "Branch/addbranch",
        method: "POST",
        data: data,
      };
      return API.execute(req);
    }

    function getbranchesbyuserIdReq() {
      var req = {
        url: "Branch/GetBranchesByUserId",
        method: "GET",
      };
      return API.execute(req);
    }

    function updatebranchReq(data) {
      var req = {
        url: "Branch/editbranch",
        method: "POST",
        params: { branchId: data.branchId },
        data: data,
      };
      return API.execute(req);
    }

    function getcompanyByUserIdReq() {
      var req = {
        url: "Company/GetCompanyByUserId",
        method: "GET",
      };
      return API.execute(req);
    }

    function updatecomapnyReq(data) {
      var req = {
        url: "Company/UpdateCompany",
        method: "PUT",
        params: { id: data.companyId },
        data: data,
      };
      return API.execute(req);
    }
  },
]);
