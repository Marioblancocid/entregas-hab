const datefns = require('date-fns');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`Servidor web funcionando en http://localhost:3000`);
});

app.get("/", (req, res) => {
  const date = datefns.getHours(new Date());
  if (date > 7 && date < 13) {
    res
      .status(200)
      .send(`Hola`);
  } else {
    res
      .status(404)
      .send("Error 404: Página no encontrada");
  }
});