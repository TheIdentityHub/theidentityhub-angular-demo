(function () {
    'use strict';

    angular
        .module('golfApp')
        .controller('AccountController', AccountController);

    AccountController.$inject = ['$scope', 'identityService'];

    function AccountController($scope, identityService) {
        activate();

        function activate() {
            $scope.addAccount = function (accountProvider) {
                identityService.addAccount(accountProvider).then(function () {
                    identityService.getAccounts().then(function (response) {
                        $scope.account.accounts = response;
                    });
                });
            }

            identityService.requireTwoFactorAuthentication()
                .then(function (isVerified) {
                    if (isVerified) {

                        $scope.account = {
                            displayName: identityService.principal.identity.displayName
                        };

                        identityService.getAccounts().then(function (response) {
                            $scope.account.accountProviders = response;
                        });
                    }
                });
        }
    }
})();
