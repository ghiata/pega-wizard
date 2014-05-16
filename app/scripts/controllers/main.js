'use strict';

angular.module('pegaWizardApp', ['mgo-angular-wizard'])
    .controller('WizardCtrl', function($scope, WizardHandler) {
        $scope.finished = function() {
            alert("Wizard finished :)");
        }

        $scope.logStep = function() {
            console.log("Step continued");
        }

        $scope.goBack = function() {
            WizardHandler.wizard().goTo(0);
        }
    });