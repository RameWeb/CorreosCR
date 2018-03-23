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
    })

    .state('consultarBitacora', {
      url: '/consultarBitacora',
      templateUrl: './components/consultarBitacora/consultarBitacora.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/consultarBitacora/consultarBitacora.controlador.js')
        }]
      },
      controller:'controladorBitacora',
      controllerAs:'vm'
    })
    
    .state('rankingTipoDeProductosProductos', {
      url: '/rankingTipoDeProductosProductos',
      templateUrl: './components/rankingProductos/ranking.vista.html',
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/rankingProductos/ranking.controlador.js')
        }]
      },
      controller:'controladorRanking',
      controllerAs:'vm'
    })

    .state('modificarTipoProducto', {
      url: '/modificarTipoProducto',
      templateUrl: './components/tipoDeProducto/modificarTipoProducto.vista.html',
      params:{
        nombreTipoProducto:''
      },
      resolve:{
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/tipoDeProducto/modificarTipoProducto.controlador.js')
        }]
      },
      controller:'controladorModProducto',
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
  });

    $urlRouterProvider.otherwise('/');
  }
})();