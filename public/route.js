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
    .state('ListaTipoProducto', {
      url: '/ListaTipoProducto',
      templateUrl: './components/tipoDeProducto/listaTipoProductos.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/tipoProducto.controlador.js')
        }]
      },
      controller:'controladorProductos',
      controllerAs:'vm'
    })
    
    .state('listaProvincia', {
      url: '/listaProvincia',
      templateUrl: './components/provincia/listaProvincia.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/provincia/provincia.controlador.js')
        }]
      },
      controller:'controladorProvincia',
      controllerAs:'vm'
    })

    .state('registroProvincia', {
      url: '/registrarProvincia',
      templateUrl: './components/provincia/provincia.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/provincia/provincia.controlador.js')
        }]
      },
      controller:'controladorProvincia',
      controllerAs:'vm'
    })
    .state('registroCanton', {
      url: '/registrarCanton',
      templateUrl: './components/canton/canton.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/canton/canton.controlador.js')
        }]
      },
      controller:'controladorCanton',
      controllerAs:'vm'
    })

    .state('listaCantones', {
      url: '/listaCantones',
      templateUrl: './components/canton/listaCanton.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/canton/listaCanton.vista.html')
        }]
      },
      controller:'controladorCanton',
      controllerAs:'vm'
    })



    .state('listaCourier', {
      url: '/listaCourier',
      templateUrl: './components/courier/listaCourier.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/courier/courier.controlador.js')
        }]
      },
      controller:'controladorCourier',
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