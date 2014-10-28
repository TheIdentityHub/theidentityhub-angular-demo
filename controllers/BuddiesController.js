(function () {
    'use strict';

    angular
        .module('golfApp')
        .controller('BuddiesController', BuddiesController);

    BuddiesController.$inject = ['$scope', 'identityService'];

    function BuddiesController($scope, identityService) {
        activate();

        function activate() {
            identityService.getFriends().then(function (response) {
                $scope.buddies = response;
            });
        }
    }
})();
