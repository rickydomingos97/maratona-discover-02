const express = require("express");
const routes = express.Router();

//para corrgir a leitura do ejs que antes lia views na raiz do projeto //
const views = __dirname + "/views/"

const profile = {
  name: "Ricardo Domingos",
  avatar: "https://avatars.githubusercontent.com/u/14863048?v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4
}

// o ejs ja le a pasta views por padrao //
/* const __dirname + "/views"
routes.get('/', (req, res) => { return res.render("/index.html")})
*/

routes.get('/', (req, res) => { return res.render(views + "index", { profile })})
routes.get('/job', (req, res) => { return res.render(views + "job")})
routes.get('/job/edit', (req, res) => { return res.render(views + "job-edit")})
routes.get('/profile', (req, res) => { return res.render(views + "profile", { profile: profile })})


module.exports = routes;