const { Router } = require('express')
const InstitutionController = require('./controllers/InstitutionController')

const routes = Router()

routes.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
})

routes.get('/institutions', InstitutionController.index)
routes.get('/institutions/:id', InstitutionController.get)

routes.post('/institutions', InstitutionController.store)

module.exports = routes
