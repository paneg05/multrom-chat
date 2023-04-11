const express = require('express')

const consign = require('consign')

const bodyParser = require('body-parser')

const expressValidator = require('express-validator')


require('dotenv').config()

const app = express()



/* configurando a view engine */
app.set('view engine', 'ejs')
app.set('views','./app/views')

/*configurar 0 middleware express.static */
app.use(express.static('./app/public'))

/* configurar o body-parse */
app.use(bodyParser.urlencoded({extended:true}))

/*autoload das rotas, models e dos controlers*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)


module.exports = app