(function () {
    'use strict';

    angular
        .module('golfApp')
        .controller('FlightsController', FlightsController);

    FlightsController.$inject = ['$scope'];

    function FlightsController($scope) {
        $scope.title = 'FlightsController';

        activate();

        function activate() {
            $scope.flights = [
                {
                    "date": new Date(2014, 10, 10, 8, 0, 0, 0),
                    "place": {
                        "id": "4", "title": "ATGOLF - Wallonie",
                        "address": "Vieux Chemin de Wavre 117a", "postalcode": "1380", "city": "Lasne", "country": "BE", "lat": "50.692443848", "lon": "4.445591927", "data": { "state": "10", "phone": "0475 74 73 68", "email": "info@atgolf.be", "website": "http:\/\/www.atgolf.be", "infrastructuur": "0" }, "locale": "nl"
                    }
                },
                {
                    "date": new Date(2014, 10, 4, 11, 0, 0, 0),
                    "place": { "id": "3", "title": "GOLF CLUB DE BERTRANSART", "address": "Route de Philippeville 45", "postalcode": "6120", "city": "NALINNES", "country": "BE", "lat": "50.338600159", "lon": "4.474242210", "data": { "state": "6", "phone": "071 21 89 00", "email": "info@cs-bertransart.be", "website": "http:\/\/www.cs-bertransart.be", "infrastructuur": "0" }, "locale": "nl" }
                },
                {
                    "date": new Date(2014, 10, 27, 17, 0, 0, 0),
                    "place": { "id": "5", "title": "ATGOLF - Vlaanderen", "address": "P\/A Krommelei 37 ", "postalcode": "2110", "city": "WIJNEGEM", "country": "BE", "lat": "51.220359802", "lon": "4.505889893", "data": { "state": "4", "phone": "0475 74 73 68", "email": "info@atgolf.be", "website": "http:\/\/www.atgolf.be", "infrastructuur": "0" }, "locale": "nl" }
                }
            ];

            $scope.sortOrder = "date";

            $scope.setSortOrder = function (property) {
                if ($scope.sortOrder === property) {
                    $scope.sortOrder = "-" + property;
                }
                else {
                    $scope.sortOrder = property;
                }
            };
        }
    }
})();
