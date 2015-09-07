if (Meteor.isClient) {
  //declare module
  angular.module('socially',['angular-meteor']);

  angular.module('socially').controller('PartiesListCtrl', ['$scope', function($scope) {
    $scope.parties = [
      {
          'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'
      },
      {
        'name': 'All dubstep all the time',
        'descrition': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ];
  }]);
}