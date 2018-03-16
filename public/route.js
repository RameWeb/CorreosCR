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
    .state('rankingTipoDeProductosProductos', {
      url: '/pineapple',
      templateUrl: './components/rankingProductos/ranking.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/rankingProductos/ranking.controlador.js')
        }]
      },
      controller:'controladorRanking',
      controllerAs:'vm'
    })
    
    .state('registroTipoProducto', {
      url: '/registrarTipoProducto',
      templateUrl: './components/tipoDeProducto/tipoProducto.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/tipoProducto.controlador.js')
        }]
      },
      controller:'controladorProductos',
      controllerAs:'vm'
    })
    


  .state('registroCourier', {
    url: '/registrarCourier',
    templateUrl: './components/courier/courier.vista.html',
    resolve:{
      load: ['$ocLazyLoad', ($ocLazyLoad) => {
        return $ocLazyLoad.load('./components/courier/courier.controlador.js')
      }]
    },
    controller:'controladorCourier',
    controllerAs:'vm'
  })
  $urlRouterProvider.otherwise('/');
}

})();