'use strict';
// Define the `AllAroundKendo` module
var AllAroundKendo = angular.module('AllAroundKendo', ["ngTable", 'ui.bootstrap']);

// Define the `DojoController` controller on the `AllAroundKendo` module
AllAroundKendo.controller('DojoController', function DojoController($scope, $http, NgTableParams) {
    var self = this;
    var data = [
        {
            name: 'Seigakukan',
            address: '9 impasse des arènes',
            city: ' Toulouse',
            days: 'Lundi, Mercredi',
            hours: '20h-22h',
            public: 'Adult (+16 yo)',
            country: 'France'
        }, {
            name: 'Musashi',
            address: 'tst',
            city: ' Colomier',
            days: 'Samedi, Mercredi',
            hours: '16-18',
            public: 'Adult (+16 yo)',
            country: 'France'
        }, {
            name: 'Chowakan',
            address: 'autre test',
            city: ' Toulouse',
            days: 'Lundi, jeudi',
            hours: '21h-22h',
            public: 'Adult (+16 yo)',
            country: 'France'
        }
    ];
    self.tableParams = new NgTableParams({}, { dataset: data });
});