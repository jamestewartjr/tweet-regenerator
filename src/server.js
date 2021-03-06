import express from 'express'
import routes from './routes'
import ejs from 'ejs'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'

const server = express()

//view engine setup
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

//middleware
server.use(logger('dev'))
server.use(express.static(path.join(__dirname + '/public')))
server.use(bodyParser.urlencoded({extended: true}))

//routes
server.use('/', routes)

server.listen(process.env.PORT || 8080)

module.exports = server