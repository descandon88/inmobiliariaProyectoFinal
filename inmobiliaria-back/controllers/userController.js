const knex = require("../config/inmobiliariaRossi_DB");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.listUser = (req, res) => {
  knex("usuarios")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.register = async (req, res) => {
  const { email, password, nombre, tipo_usuario } = req.body;
  console.log();
  const salt = await bcrypt.genSalt(10); 
  const passwordEncrypt =  await bcrypt.hash(password, salt);

  knex("usuarios")
    .where({ email: email })
    .then((resultado) => {
      if (resultado.length) {
        res.status(400).json({ error: "El email ya esta siendo utilizado" });
        return;
      }
      knex("usuarios")
        .insert({ email: email, password: passwordEncrypt, nombre: nombre, tipo_usuario: tipo_usuario})
        .then(() => {
          res.json({
            mensaje: "El usuario se ha registrado correctamente",
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};



exports.login = (req, res) => {
  const { email, password } = req.body;

  knex("usuarios")
      .where({ email: email })
      .then(async (resultado) => {
          if (!resultado.length) {
              res.status(404).json({
                  error: "Email y/o contraseña incorrecta/s",
              });
              return;
          }
          const validatePassword = await bcrypt.compare(
              password,
              resultado[0].password
          );
          if (!validatePassword) {
              res.status(404).json({
                  error: "Email y/o contraseña incorrecta/s",
              });
              return;
          }
          const token = jwt.sign(
              {
                  nombre: resultado[0].nombre,
                  email: resultado[0].email,
                  id: resultado[0].ids,
                  tipo_usuario: resultado[0].tipo_usuario
              },
              process.env.TOKEN_SECRET
          );

          res.json({ success: true, token: token });
      });
};