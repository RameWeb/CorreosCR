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

    .state('regRepartidores', {
      url: '/regRepartidores',
      templateUrl: './components/repartidores/regRepartidores.vista.html',
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

    .state('mantRepartidores', {
      url: '/mantRepartidores',
      templateUrl: './components/repartidores/mantRepartidores.vista.html',
      data:{
        pageTitle: 'Mantenimiento de Repartidores'
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