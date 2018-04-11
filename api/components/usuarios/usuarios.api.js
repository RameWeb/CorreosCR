const UserModel = require('./usuarios.model'),
      bcrypt = require('bcryptjs');
      

module.exports.registrar = (req, res) => {
  let newUser = new UserModel({
    cedula              :  req.body.cedula,
    primerNombre        :  req.body.primerNombre,
    segundoNombre       :  req.body.segundoNombre,
    primerApellido      :  req.body.primerApellido,
    segundoApellido     :  req.body.segundoApellido,
    fechaNacimiento     :  req.body.fechaNacimiento,
    correoElectronico   :  req.body.correoElectronico,
    contrasenna         :  req.body.contrasenna,
    provincia           :  req.body.provincia,
    canton              :  req.body.canton,
    distrito            :  req.body.distrito,
    photo               :  req.body.photo,
    vehiculos           :  req.body.vehiculos,
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msg: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msg:'Se registró el usuario correctamente'});
    }
  });

  newUser.pre('save', (next) => {  
    var user = this;
  
    if (!user.isModified('password')) return next();  
  
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) return next(err);
          user.password = hash;
          next();
      });
    });
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