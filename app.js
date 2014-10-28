"use strict";

var golfApp = angular.module("golfApp", ["ngRoute", "identityHub"])
     .config(function ($routeProvider) {
        $routeProvider
            .when("/courses", {
                templateUrl: "views/courses.html",
                controller: "CoursesController"
            })
            .when("/flights", {
                templateUrl: "views/flights.html",
                controller: "FlightsController"
            })
            .when("/buddies", {
                templateUrl: "views/buddies.html",
                controller: "BuddiesController"
            })
            .when("/account", {
                templateUrl: "views/account.html",
                controller: "AccountController"
            })
            .otherwise({
                redirectTo: "/courses"
            });
    })
    .config(function (identityServiceProvider) {
        identityServiceProvider.config({
            baseUrl: "[YOUR BASE URL]",
            clientId: "[YOUR CLIENT ID]",
            redirectUri: "[YOUR APP BASE URL]/callback.html",
            popup: true,
            manualSignIn: true
    });
});
