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
      templateUrl: './components/convenios/registrarConvenio/convenio.vista.html',
      data:{
        pageTitle: 'Registro convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrarConvenio/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',
      controllerAs: 'vm'
    })

    .state('lista-convenios', {
      url: '/lista-convenios',
      templateUrl: './components/convenios/listarConvenio/listaConvenios.vista.html',
      data:{
        pageTitle: 'Lista convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrarConvenio/convenios.controlador.js')
        }]
      },
      controller: 'controladorConvenios',
      controllerAs: 'vm'
    })

    
    .state('modificar-convenios', {
      url: '/modificar-convenios',
      templateUrl: './components/convenios/modificarConvenio/modificarConvenios.vista.html',
      data:{
        pageTitle: 'Lista convenios | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/modificarConvenio/modificarConvenio.controlador.js')
        }]
      },
      controller: 'controladorModificarConvenios',
      controllerAs: 'vm'
    })
    

    .state('paquetes', {
      url: '/paquetes',
      templateUrl: './components/paquetes/registrarPaquetes/paquetes.vista.html',
      data:{
        pageTitle: 'Registro llegada de paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })

    .state('listarPaquetes', {
      url: '/listarPaquetes',
      templateUrl: './components/paquetes/listarPaquetes/listarPaquetes.vista.html',
      data:{
        pageTitle: 'Lista llegada de paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
      controllerAs: 'vm'
    })
    .state('modificarPaquetes', {
      url: '/modificarPaquetes',
      templateUrl: './components/paquetes//modificarPaquetes/modificarPaquetes.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/modificarPaquetes/modificarPaquetes.controlador.js')
        }]
      },
      controller: 'controladorModificarPaquetes',
      controllerAs: 'vm'
    })

    .state('cambiarEstadoPaquetes', {
      url: '/cambiarEstadoPaquetes',
      templateUrl: './components/paquetes/cambiarEstadoPaquetes/cambiarEstadoPaquetes.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/cambiarEstadoPaquetes/cambiarEstadoPaquetes.controlador.js')
        }]
      },
      controller: 'controladorCambiarEstadoPaquetes',
      controllerAs: 'vm'
    })

    .state('casillero', {
      url: '/casillero',
      templateUrl: './components/casillero/casillero.vista.html',
      data:{
        pageTitle: 'Mi casillero | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/casillero/casillero.controlador.js')
        }]
      },
      controller: 'controladorCasillero',
      controllerAs: 'vm'
    })


    .state('contrasenna', {
      url: '/contrasenna',
      templateUrl: './components/contrasenna/contrasenna.vista.html',
      data:{
        pageTitle: 'Mi contraseña| Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/contrasenna/contrasenna.controlador.jss')
        }]
      },
      controller: 'controladorContrasenna',
      controllerAs: 'vm'
    })
  

    $urlRouterProvider.otherwise('/');
  }
})();