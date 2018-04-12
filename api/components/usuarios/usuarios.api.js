const UserModel = require('./usuarios.model'),
      bcrypt = require('bcryptjs');
      

module.exports.registrar = (req, res) => {

  let newUser = Object.assign(new UserModel(), req.body);

  switch(newUser.tipoUsuario) {
    case "Encargado de Sucursal":
      newUser.sucursal = req.body.sucursal;
    break;
    case "Encargado de Aduana":
      newUser.rolAduana = req.body.rolAduana;
    break;
    case "Repartidor":
      newUser.telefono = req.body.telefono;
      newUser.sucursal = req.body.sucursal;
      newUser.licencia = req.body.licencia;
      newUser.fotoLicencia = req.body.fotoLicencia;
      newUser.licenciaVencimiento = req.body.licenciaVencimiento;
    break;
    case "Cliente":
      newUser.telefono = req.body.telefono;
      newUser.sucursalPreferencia = req.body.sucursalPreferencia;
      newUser.tarjetas.insert(req.body.tarjetas[0]);
    break;
    default:
    break;
  }
  console.log('Objeto que viene del front-end');
  console.log(newUser);

  // newUser.pre('save', (next) => {
  //   var user = this;
  
  //   if (!user.isModified('password')) return next();  
  
  //   bcrypt.genSalt(10, (err, salt) => {
  //     if (err) return next(err);
  //     bcrypt.hash(user.password, salt, (err, hash) => {
  //         if (err) return next(err);
  //         user.password = hash;
  //         next();
  //     });
  //   });
  // });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msg: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msg:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  UserModel.find().then((user) => {
    res.send(user);
  });
};

module.exports.actualizar = (req,res) => {
  UserModel.findByIdAndUpdate(req.body._id, { $set: req.body}, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};