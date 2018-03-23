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
        pageTitle: 'Correos de Costa Rica'
      }
    })

    .state('admin', {
      url: '/admin',
      templateUrl: './components/admin/admin.vista.html',
      data:{
        pageTitle: 'Dashboard | Administrador'
      }
    })

    .state('cliente', {
      url: '/cliente',
      templateUrl: './components/cliente/cliente.vista.html',
      data:{
        pageTitle: 'Dashboard | Cliente'
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

    .state('licencias', {
      url: '/licencias',
      templateUrl: './components/licencias/licencias.view.html',
      data:{
        pageTitle: 'Registro Licencias | Ejemplo Arquitectura'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/licencias/licencias.controller.js')
        }]
      },
      controller: 'controladorLicencias',
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

    .state('notificarEstadoPaquetes', {
      url: '/notificarEstadoPaquetes',
      templateUrl: './components/notificarCliente/notificarEstado.vista.html',
      data:{
        pageTitle: 'Editar paquetes | Correos CR'
      },
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/paquetes/registrarPaquetes/paquetes.controlador.js')
        }]
      },
      controller: 'controladorPaquetes',
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