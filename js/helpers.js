app.factory('Helpers', ['$http', '$rootScope', '$state', function($http, $rootScope, $state) {
    return {
        name: 'Helpers',
        Find: function(array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] && value && array[i][key] === value) {
                    return array[i];
                }
            }
        },
        ShowError: function(_msg) {
            $rootScope.Loading = false;
            $rootScope.errorMsg = _msg;
            $(".alert-danger").removeClass("in").show();
            $(".alert-danger").delay(4000).addClass("in").fadeOut(5000);
        },
        showToaster: function (_msg) {
            Swal.mixin({
                toast: true,
                position: 'top-right',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              }).fire({
                icon: 'success',
                title: _msg
              })
        },
        showErrorMessage: function (_msg) {
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              }).fire({
                icon: 'error',
                title: _msg
              })
        }
       
        
    }
}]);