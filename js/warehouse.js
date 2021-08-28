app.factory("API", [
  "$http",
  "$rootScope",
  "$state",
  "Helpers",
  function ($http, $rootScope, $state, Helpers) {
    _url = "https://erpapi.code-iss.com/";
    return {
      name: "API",
      url: _url,
      execute: function (_req) {
        let headers = {
          authorization: "Bearer " + localStorage.userObj,
          "Content-Type": "application/json",
        };
        _req.url = _url + "api/" + _req.url;
        _req.headers = headers;
        let result = $http(_req);
        // result.catch(function (_err) {
        //   localStorage.clear();
        //   $state.go("login");
        //   console.log(_err);
        //   // Helpers.ShowError(Translate[$rootScope.lang].TEXT_LOGIN_AGAIN);
        // });
        return result;
      },
    };
  },
]);
