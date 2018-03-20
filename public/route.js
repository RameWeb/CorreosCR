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
        pageTitle: 'Inicio'
      }
    })

    .state('registroSucursal',{
      url: '/registroSucursal',
      templateUrl: './components/sucursales/registrar/sucursales.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/registrar/sucursales.controlador.js')
        }]
      },
      controller: 'controladorSucursales',
      controllerAs: 'vm'
    })

    .state('listarSucursal',{
      url: '/listarSucursal',
      templateUrl: './components/sucursales/listarBuscar/mantenimientoSucursales.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/registrar/sucursales.controlador.js')
        }]
      },
      controller: 'controladorSucursales',
      controllerAs: 'vm'
    })

    .state('modificarSucursal',{
      url: '/modificarSucursal',
      templateUrl: './components/sucursales/modificar/modificarSucursal.vista.html',
      params:{
        idSucursal: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/sucursales/modificar/modificarSucursal.controlador.js')
        }]
      },
      controller: 'controladorModificarSucursal',
      controllerAs: 'vm'
    })
    
    .state('registroPrealerta',{
      url: '/registroPrealerta',
      templateUrl: './components/prealertas/registrar/prealerta.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/registrar/prealerta.controlador.js')
        }]
      },
      controller: 'controladorPrealertas',
      controllerAs: 'vm'
    })

    .state('listarPrealerta',{
      url: '/listarPrealerta',
      templateUrl: './components/prealertas/listarBuscar/mantenimientoPrealerta.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/registrar/prealerta.controlador.js')
        }]
      },
      controller: 'controladorPrealertas',
      controllerAs: 'vm'
    })

    .state('modificarPrealerta',{
      url: '/modificarPrealerta',
      templateUrl: './components/prealertas/modificar/modificarPrealerta.vista.html',
      params:{
        idPrealerta: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/prealertas/modificar/modificarPrealerta.controlador.js')
        }]
      },
      controller: 'controladorModificarPrealertas',
      controllerAs: 'vm'
    })

    .state('registrarConvCliente',{
      url: '/registrarConvCliente',
      templateUrl: './components/convenios/registrar/convenios.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrar/convenios.controlador.js')
        }]
      },
      controller: 'controladorConveniosCliente',
      controllerAs: 'vm'
    })

    
    .state('listaConvenios',{
      url: '/listaConvenios',
      templateUrl: './components/convenios/listarBuscar/mantenimientoConvenios.vista.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/registrar/convenios.controlador.js')
        }]
      },
      controller: 'controladorConveniosCliente',
      controllerAs: 'vm'
    })

    .state('modificarConvCliente',{
      url: '/modificarConvCliente',
      templateUrl: './components/convenios/modificar/modificarConvenios.vista.html',
      params:{
        idConvenio: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/convenios/modificar/modificarConvenios.controlador.js')
        }]
      },
      controller: 'controladorModConveniosCliente',
      controllerAs: 'vm'
    })
    
    $urlRouterProvider.otherwise('/');
  }
})();