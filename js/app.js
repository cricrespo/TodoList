angular.module('app', ['ui.router', 'firebase']).config(function($stateProvider, $urlRouterProvider) {
    
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
          .state('todoview', {
              url: '/todoview',
              parent:'home',
              views:
              {
                "content@": {   templateUrl: 'views/todoview.html' },
              }
          });

    
});
