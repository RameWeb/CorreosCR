const bcryptjs = require('bcryptjs');

//Requerimos mongoose
let mongoose = require('mongoose');

//Esquema de usuarios
let UserSchema = new mongoose.Schema({
  cedula : {type: String, required: true},
  primerNombre : {type: String, required: true},
  segundoNombre : {type: String},
  primerApellido : {type: String, required: true},
  segundoApellido : {type: String},
  fechaNacimiento : {type: String, required: true},
  correoElectronico : {type: String, required: true},
  contrasenna : {type: String, required: true},
  provincia : {type: String, required: true},
  canton : {type: String, required: true},
  distrito : {type: String, required: true},
  photo : {type: String, required: true},
  vehiculos : {type: Array, required: true}
});

/**
 * Función que compara la contraseña
 */
UserSchema.methods.compararContrasenna = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.contrasenna, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural