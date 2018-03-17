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

    .state('regClientes', {
      url: '/regClientes',
      templateUrl: './components/clientes/regClientes.vista.html',
      data:{
        pageTitle: 'Registrar Clientes'
      },
      params: {
        objUsuarioTemp: ''
      },
      css: './sources/styles/components/clientes.style.scss',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/clientes/clientes.controlador.js')
        }]
      },
      controller: 'controladorClientes',
      controllerAs: 'vm'
    })

    .state('mantClientes', {
      url: '/mantClientes',
      templateUrl: './components/clientes/mantClientes.vista.html',
      data:{
        pageTitle: 'Mantenimiento de Clientes'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/clientes/clientes.controlador.js')
        }]
      },
      controller: 'controladorClientes',
      controllerAs: 'vm'
    })

    .state('regEmpleados', {
      url: '/regEmpleados',
      templateUrl: './components/empleados/regEmpleados.vista.html',
      data:{
        pageTitle: 'Registro de Empleados'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/empleados/empleados.controlador.js')
        }]
      },
      controller: 'controladorEmpleados',
      controllerAs: 'vm'
    }),

    $urlRouterProvider.otherwise('/');
  }
})();