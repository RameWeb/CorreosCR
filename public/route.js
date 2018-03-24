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

    .state('iniciarSesion', {
      url: '/iniciarSesion',
      templateUrl: './components/inicioSesion/inicioSesion.view.html',
      data:{
        pageTitle: 'Inicio de Sesión'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controller.js')
        }]
      },
      controller: 'inicioSesionController',
      controllerAs: 'vm'
    })

    .state('registroSucursal',{
      url: '/registroSucursal',
      templateUrl: './components/sucursales/registrar/sucursales.vista.html',
      data:{
        pageTitle: 'Registrar Sucursales'
      },
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
      data:{
        pageTitle: 'Listar Sucursales'
      },
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
      data:{
        pageTitle: 'Modificar Sucursales'
      },
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
      data:{
        pageTitle: 'Registrar Prealertas'
      },
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
      data:{
        pageTitle: 'Listar Prealertas'
      },
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
      data:{
        pageTitle: 'Modificar Prealertas'
      },
      params: {
        tracking: ''
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
      data:{
        pageTitle: 'Registrar Convenios'
      },
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
      data:{
        pageTitle: 'Listar Convenios'
      },
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
      data:{
        pageTitle: 'Modificar Convenios'
      },
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
    });

    $urlRouterProvider.otherwise('/');
  }
})();