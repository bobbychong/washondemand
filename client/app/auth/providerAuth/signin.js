angular.module('wod.provSI', []).controller('provSICtrl', provSICtrl);

function provSICtrl(authFactory, $window, $location) {
  var vm = this;
  vm.provider = {
    email: '',
    password: ''
  };

  vm.signin = function() {
    console.log(vm.provider);
    //call factory
    authFactory.provSignin(vm.provider)
    .then(function(token) {
      authFactory.clearForm(vm.provider);
      $window.localStorage.setItem('com.wod', token);
      $location.path('/providerProfile');
    })
    .catch(function(error) {
      console.error(error);
    });
  };
}