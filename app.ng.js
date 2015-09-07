Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
  //declare module
  angular.module('socially',['angular-meteor']);

  angular.module('socially').controller('PartiesListCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function(){
    if (Parties.find().count() === 0) {
      var parties = [
        {'name': 'dubstep-Free Zone',
        'description': 'Fast just go faster with Nexus S.'},
        {'name': 'All dubstep all the time',
        'description': 'Get it on!'},
        {'name': 'Savage lunging',
        'description': 'Leisure suit required. And only fiercest manners.'}
      ];
      for (var i = 0; i < parties.length; i++)
        Parties.insert(parties[i]);
    }
  });
}