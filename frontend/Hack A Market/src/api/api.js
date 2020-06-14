// IMPORTO LO QUE NECESITO PARA LA CONEXION/API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


// JSONWEBTOKEN DEPENDENCIAS
const jwt = require('jsonwebtoken')
const config = require('./config')

// DECLARO LA "APP"
const app = express();

// APP USES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('llave', config.llave)

// DATOS DE CONEXION
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mario',
  password: '44482177',
  database: 'hackamarket'
})

// CONEXION
connection.connect(error => {
  if (error) throw error
  console.log('DATABASE UP')
})

// PUERTO DE LA API
const PORT = 3050
app.listen(PORT, () => console.log('API UP'))


// FUNCION PARA RECUPERAR LOS CLIENTES DE LA BBDD
app.get('/clientes', (req, res) => {
  // QUERY SQL
  const sql = 'SELECT * FROM clientes'
  //CONEXION
  connection.query(sql, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send('No hay clientes')
    }
  })
})

// FUNCION PARA CONSEGUIR UN CLIENTE POR ID
app.get('/clientes/id/:id', (req, res) => {
  const id = req.params.id
  // QUERY SQL
  const sql = 'SELECT * FROM clientes WHERE id=?'
  //CONEXION
  connection.query(sql, id, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send('No existe esa id')
    }
  })
})


// CREAR CLIENTES
app.post('/add', (req, res) => {
  // QUERY SQL
  const sql = 'INSERT INTO clientes SET ?'
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa
  }
  //CONEXION
  connection.query(sql, newClient, error => {
    if (error) throw error
    res.send('Cliente creado')
  })
})

// EDITAR CLIENTES
app.put('/clientes', (req, res) => {
  // QUERY SQL
  const sql = `UPDATE clientes SET ? where id=${req.body.id}`
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa
  }
  //CONEXION
  connection.query(sql, newClient, error => {
    if (error) throw error
    res.send('User editado')
  })
})

// BORRAR CLIENTES
app.delete('/clientes/del/:id', (req, res) => {
  //QUERY SQL
  const id = req.params.id;
  const sql = `DELETE FROM clientes WHERE id=${id}`
  //CONEXION 
  connection.query(sql, error => {
    if (error) throw error
    res.send('Cliente borrado')
  })
})

// CREAR USUARIOS
app.post('/adduser', (req, res) => {
  // QUERY SQL
  const sql = 'INSERT INTO usuarios SET ?'
  const newClient = {
    email: req.body.email,
    password: req.body.password
  }
  //CONEXION
  connection.query(sql, newClient, error => {
    if (error) throw error
    res.send('User creado')
  })
})

// MÉTODO LOGIN QUE CREA EL TOKEN 
app.post('/auth', (req, res) => {
  // DATOS QUE LLEGAN, USER Y PASSW
    const usuario = req.body.usuario;
    const password = req.body.password;

    //SECUENCIA SQL
    const sql = `SELECT * FROM usuarios WHERE email='${usuario}' AND password='${password}'`
    
    // CONEXIÓN A LA BBDD
    connection.query(sql, (error, results) => {
      let admin = null
      if(error) throw error
      if(results.length > 0){
        const payload = {
          check: true
        }
        if(results[0].admin === 1) {
          admin = true
        } else {
          admin = false
        }
        const token = jwt.sign(payload, app.get("llave"), {
          expiresIn: "1 day",
        });
        res.json({
          mensaje: 'Autenticación correcta',
          token: token,
          isAdmin: admin
        })
      } else {
        console.log('Datos incorrectos');
      }
    })
})

// PRODUCTOS -----------------------------------------

// FUNCION PARA RECUPERAR OS PRODUCTOS DA BBDD
app.get('/productos', (req, res) => {
  // QUERY SQL
  const sql = 'SELECT * FROM productos'
  //CONEXION
  connection.query(sql, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send('No hay productos')
    }
  })
})

// FUNCION PARA CONSEGUIR UN PRODUCTO POR ID
app.get('/productos/id/:id', (req, res) => {
  const id = req.params.id
  // QUERY SQL
  const sql = 'SELECT * FROM productos WHERE id=?'
  //CONEXION
  connection.query(sql, id, (error, results) => {
    if (error) throw error

    if (results.length > 0) {
      res.json(results)
    }
    else {
      res.send({ error: 'No existe ese id' })
    }
  })
})