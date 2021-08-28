app.factory("accounts", [
  "API",
  function (API) {
    return {
      getaccountReq: getaccountReq,
    };

    function getaccountReq() {
      var req = {
        url: "Accounting/GetAllAccountsByBranch",
        method: "GET",
      };
      return API.execute(req);
    }
  },
]);
