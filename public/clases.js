class Usuario{
  constructor(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario){
    this.identificacion = pIdentificacion;
    this.nombre = pNombre;
    this.apellido1 = pApellido1;
    this.fechaNacimiento = pFechaNacimiento;
    this.email = pEmail;
    this.contrasenna = pContrasenna;
    this.provincia = pProvincia;
    this.canton = pCanton,
    this.distrito = pDistrito;
    this.direccion = pDireccion;
    this.estado = pestado;
    this.tipoUsuario = pTipoUsuario;
  }

  cambiarEstado(pnuevoEstado){
    this.estado = pnuevoEstado;
  }

  getTipoUsuario(){
    return this.tipoUsuario;
  }

  getEmail(){
    return this.email;
  }
  
  getPassword(){
    return this.contrasenna;
  }
}

class EmpleadoSucursal extends Usuario{
  constructor(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario, pObjSucursal, pLicencia, pFotoLicencia, pVencimientoLicencia){
    super(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario);
    this.sucursal = pObjSucursal;
  }
}

class EmpleadoAduana extends Usuario{
  constructor(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario, pRolAduana){
    super(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario);
    this.rolAduana = pRolAduana;
  }
}

class Repartidor extends Usuario{
  constructor(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario, pTelefono, pPuesto, pSucursal, pLicencia, pFotoLicencia,pLicenciaVencimiento){
    super(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario);
    this.telefono = pTelefono;
    this.puesto = pPuesto;
    this.sucursal = pSucursal;
    this.licencia = pLicencia;
    this.fotoLicencia = pFotoLicencia;
    this.licenciaVencimiento = pLicenciaVencimiento;
  }
}

class Cliente extends Usuario{
  constructor(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario, pTelefono, pObjTarjeta){
    super(pIdentificacion, pNombre, pApellido1, pFechaNacimiento, pEmail, pContrasenna, pProvincia, pCanton, pDistrito, pDireccion, pestado, pTipoUsuario);
    this.telefono = pTelefono;
    this.tarjeta = pObjTarjeta;
  }

  getTarjeta(){
    return this.tarjeta;
  }
}

class Tarjeta{
  constructor(pTitularTarjeta, pNumeroTarjeta, pFechaVencimiento, pCcv){
    this.titularTarjeta = pTitularTarjeta;
    this.numeroTarjeta = pNumeroTarjeta;
    this.fechaVencimiento = pFechaVencimiento;
    this.ccv = pCcv;
  }
}