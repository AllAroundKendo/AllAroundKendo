// Define the `AllAroundKendo` module
var AllAroundKendo = angular.module('AllAroundKendo', ["ngTable"]);

// Define the `PhoneListController` controller on the `AllAroundKendo` module
AllAroundKendo.controller('DojoController', function DojoController($scope, $http) {
    var dojos = [
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
    var self = this;
    self.tableParams = new NgTableParams({}, { dataset: dojos });
});