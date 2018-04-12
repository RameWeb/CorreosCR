const express = require('express'),
      router = express.Router(),
      users = require('./empleados.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los empleados dentro del local storage
 */
router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});

/**
 * Función que obtiene todos los empleados
 */
router.route('/get_all_users')
  .get((req, res) => {
    users.listarTodos(req,res);
});

/**
 * Función que actualiza los empleados
 */
router.route('/update_users')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;