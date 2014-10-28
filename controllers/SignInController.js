(function () {
    'use strict';

    angular
        .module('golfApp')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['$scope', 'identityService'];

    function SignInController($scope, identityService) {
        activate();

        function activate() {
            $scope.signIn = function () {
                identityService.signIn();
            };

            $scope.signOut = function () {
                identityService.signOut();
            };

            $scope.principal = identityService.principal;
        }
    }
})();
