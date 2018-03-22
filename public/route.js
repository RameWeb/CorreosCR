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
      templateUrl: './components/usuarios/repartidores/registrar/regRepartidores.vista.html',
      data:{
        pageTitle: 'Registrar Repartidores'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/repartidores/registrar/repartidores.controlador.js')
        }]
      },
      controller: 'controladorRepartidores',
      controllerAs: 'vm'
    })

    .state('mantRepartidores', {
      url: '/mantRepartidores',
      templateUrl: './components/usuarios/repartidores/listarBuscar/mantRepartidores.vista.html',
      data:{
        pageTitle: 'Mantenimiento de Repartidores'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/repartidores/registrar/repartidores.controlador.js')
        }]
      },
      controller: 'controladorRepartidores',
      controllerAs: 'vm'
    })

    .state('modRepartidores', {
      url: '/modRepartidores',
      templateUrl: './components/usuarios/epartidores/modificar/modRepartidores.vista.html',
      data:{
        pageTitle: 'Modificar Repartidores'
      },
      params: {
        identificacion: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/repartidores/modificar/modRepartidores.controlador.js')
        }]
      },
      controller: 'controladorModRepartidores',
      controllerAs: 'vm'
    })


    .state('regClientes', {
      url: '/regClientes',
      templateUrl: './components/usuarios/clientes/registrar/regClientes.vista.html',
      data:{
        pageTitle: 'Registrar Clientes'
      },
      params: {
        objUsuarioTemp: ''
      },
      css: './sources/styles/components/clientes.style.scss',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/clientes/registrar/clientes.controlador.js')
        }]
      },
      controller: 'controladorClientes',
      controllerAs: 'vm'
    })

    .state('mantClientes', {
      url: '/mantClientes',
      templateUrl: './components/usuarios/clientes/listarBuscar/mantClientes.vista.html',
      data:{
        pageTitle: 'Mantenimiento de Clientes'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/clientes/registrar/clientes.controlador.js')
        }]
      },
      controller: 'controladorClientes',
      controllerAs: 'vm'
    })

    .state('modClientes', {
      url: '/modClientes',
      templateUrl: './components/usuarios/clientes/modificar/modClientes.vista.html',
      data:{
        pageTitle: 'Modificar Clientes'
      },
      params: {
        identificacion: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/clientes/modificar/modClientes.controlador.js')
        }]
      },
      controller: 'controladorModClientes',
      controllerAs: 'vm'
    })

    .state('regEmpleados', {
      url: '/regEmpleados',
      templateUrl: './components/usuarios/empleados/registrar/regEmpleados.vista.html',
      data:{
        pageTitle: 'Registro de Empleados'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/empleados/registrar/empleados.controlador.js')
        }]
      },
      controller: 'controladorEmpleados',
      controllerAs: 'vm'
    })

    .state('mantEmpleados', {
      url: '/mantEmpleados',
      templateUrl: './components/usuarios/empleados/listarBuscar/mantEmpleados.vista.html',
      data:{
        pageTitle: 'Lista de Empleados'
      },
      params: {
        objUsuarioTemp: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/empleados/registrar/empleados.controlador.js')
        }]
      },
      controller: 'controladorEmpleados',
      controllerAs: 'vm'
    })

    .state('modEmpleados', {
      url: '/modEmpleados',
      templateUrl: './components/usuarios/empleados/modificar/modEmpleados.vista.html',
      data:{
        pageTitle: 'Modificar Empleados'
      },
      params: {
        identificacion: ''
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/usuarios/empleados/modificar/modEmpleados.controlador.js')
        }]
      },
      controller: 'controladorModEmpleados',
      controllerAs: 'vm'
    }),

    $urlRouterProvider.otherwise('/');
  }
})();