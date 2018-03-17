(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider

    .state('landingPage', {
      url: '/',
      templateUrl: './components/landingPage/landing.vista.html',
      data:{
        pageTitle: 'Inicio | Correos de Costa Rica'
      }
    })

    

    .state('convenios', {
      url: '/convenios',
      templateUrl: './components/convenios/convenio.vista.html',
      data:{
        pageTitle: 'Registro convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',
      controllerAs: 'vm'
    })

    .state('lista-convenios', {
      url: '/lista-convenios',
      templateUrl: './components/convenios/listaConvenios.vista.html',
      data:{
        pageTitle: 'Lista convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',
      controllerAs: 'vm'
    })
    

    .state('paquetes', {
      url: '/paquetes',
      templateUrl: './components/paquetes/paquetes.vista.html',
      data:{
        pageTitle: 'Registro llegada de paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })

  

    $urlRouterProvider.otherwise('/');
  }
})();