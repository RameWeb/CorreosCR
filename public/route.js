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
        pageTitle: 'Inicio | Registro Direcciones'
      }
    })

    .state('direcciones', {
      url: '/direcciones',
      templateUrl: './components/direcciones/direcciones.view.html',
      data:{
        pageTitle: 'Registro Direcciones | Ejemplo Arquitectura'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/direcciones/direcciones.controller.js')
        }]
      },
      controller: 'controladorDirecciones',
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');
  }
})();