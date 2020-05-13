const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var opn = require('opn');

app.set("port", 3000);
app.set("views", path.join(__dirname, "../vistas"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

const startServer = (informacion) => {
  app.use(
    router.get("/", (req, res) => {
      res.render("index.html", informacion);
    })
  );
  // static files
  app.use(express.static(path.join(__dirname, "../public")));

  //listening the server
  app.listen(app.get("port"), () => {
    console.log(`Server on port`, app.get("port"));
  });
  opn('http://localhost:3000/');
};

module.exports = {
  startServer,
};