class Repartidor{
  constructor(pIdentificacion,pNombre,pApellido1,pFechaNacimiento,pTelefono,pProvincia,pCanton,pDistrito,pDireccion,pPuesto,pSucursal,pEmail,pContrasenna,pLicencia,pFotoLicencia,pLicenciaVencimiento){
    this.identificacion = pIdentificacion;
    this.nombre = pNombre;
    this.apellido1 = pApellido1;
    this.fechaNacimiento = pFechaNacimiento;
    this.telefono = pTelefono;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.puesto = pPuesto;
    this.sucursal = pSucursal;
    this.email = pEmail;
    this.contrasenna = pContrasenna;
    this.licencia = pLicencia;
    this.fotoLicencia = pFotoLicencia;
    this.vencimientoLicencia = pLicenciaVencimiento;
    this.paquetes = [];
  }
}

class Cliente{
  constructor(pIdentificacion,pNombre,pApellido1,pEmail,pContrasenna,pFechaNacimiento,pTelefono,pProvincia,pCanton,pDistrito,pDireccion,pTitularTarjeta,pNumeroTarjeta,pMesVencimiento,pAnnoVencimiento,pCcv, pestado){
    this.identificacion = pIdentificacion;
    this.nombre = pNombre;
    this.apellido1 = pApellido1;
    this.email = pEmail;
    this.contrasenna = pContrasenna;
    this.fechaNacimiento = pFechaNacimiento;
    this.telefono = pTelefono;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.titularTarjeta = pTitularTarjeta;
    this.numeroTarjeta = pNumeroTarjeta;
    this.mesVencimiento = pMesVencimiento;
    this.annoVencimiento = pAnnoVencimiento;
    this.ccv = pCcv;
    this.paquetes = [];
    this.estado = pestado;
  }

  cambiarEstado(pnuevoEstado){
    this.estado = pnuevoEstado;
  }
}

class Empleado{
  constructor(pRolEmpleado,pIdentificacion,pNombre,pApellido1,pEmail,pContrasenna,pFechaNacimiento,pTelefono,pProvincia,pCanton,pDistrito,pDireccion,pRolAduana,pSucursalAsignada,pLicencia,pFotoLicencia,pVencimientoLicencia){
    this.rolEmpleado = pRolEmpleado;
    this.identificacion = pIdentificacion;
    this.nombre = pNombre;
    this.apellido1 = pApellido1;
    this.email = pEmail;
    this.contrasenna = pContrasenna;
    this.fechaNacimiento = pFechaNacimiento;
    this.telefono = pTelefono;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.rolAduana = pRolAduana;
    this.sucursalAsignada = pSucursalAsignada;
    this.licencia = pLicencia;
    this.fotoLicencia = pFotoLicencia;
    this.vencimientoLicencia = pVencimientoLicencia;
  }
}

