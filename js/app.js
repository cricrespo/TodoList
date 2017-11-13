angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/');
    
          $stateProvider
          .state('home', {
              url: '/',
              views:
              {
                "topbar": {   templateUrl: 'views/topbar.html' },
                "content": {   templateUrl: 'views/main.html' },
                "footer": {   templateUrl: 'views/footer.html' },
              }
          })
          .state('billboard', {
              url: '/billboard',
              parent:'home',
              views:
              {
                "content@": {   templateUrl: 'views/billboard.html' },
    
              }
          })
        //   .state('map', {
        //       url: '/map',
        //       parent:'home',
        //       views:
        //       {
        //         "content@": {   templateUrl: 'views/map.html' },
        //       }
              // });
    
});