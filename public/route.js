(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider

    .state('landing-page', {
      url: '/',
      templateUrl: './components/landingPage/landing.vista.html',
      data:{
        pageTitle: 'Inicio | Correos de Costa Rica'
      }
    })

    .state('registrarRepartidores', {
      url: '/registrarRepartidores',
      templateUrl: './components/repartidores/registrarRepartidores.vista.html',
      data:{
        pageTitle: 'Registrar Repartidores'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/repartidores/repartidores.controlador.js')
        }]
      },
      controller: 'controladorRepartidores',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');
  }
})();