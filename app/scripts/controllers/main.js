'use strict';

angular.module('pegaWizardApp', ['mgo-angular-wizard'])
    .controller('WizardCtrl', function($scope, $http, WizardHandler) {
        $scope.finished = function() {
            alert("Wizard finished :)");
        }

        $scope.logStep = function() {
            console.log("Step continued");
        }

        $scope.goBack = function() {
            WizardHandler.wizard().goTo(0);
        }

        $scope.getOptions = function() {
            alert($scope.user);
            // Get the loans options from the API
            $http({method: 'POST', url: '/someUrl'}).
                success(function(data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                }).
                error(function(data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
        }

        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.isUnchanged = function(user) {
            return angular.equals(user, $scope.master);
        };

        $scope.reset();
    });