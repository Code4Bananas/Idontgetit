angular.module('testapp', ['ionic'])
    .config(function($stateProvider, $urlRouterProvider) {
        "use strict";

        /* Set up the states for the application's different sections. */
        $stateProvider           
            .state('home', {name: 'home', url: '/home', templateUrl: 'home.html', controller: 'MainCtrl'})
            .state('page2', {name: 'page2', url: '/page2', templateUrl: 'page2.html', controller: 'MainCtrl'})
            .state('page3', {name: 'page3', url: '/page3', templateUrl: 'page3.html', controller: 'MainCtrl'})
  .state('page4', {name: 'page4', url: '/page4', templateUrl: 'page4.html', controller: 'MainCtrl'})
        ;
        $urlRouterProvider.otherwise('/home');
        
    })

    .controller('MainCtrl', function($scope, $state, $ionicSideMenuDelegate) {
        "use strict";
      
        $scope.enterState = function(stateID) {
          console.log(stateID);
            $state.transitionTo(stateID);
        };

       //$scope.enterState('home');
      
        $scope.$state = $state;
    })
