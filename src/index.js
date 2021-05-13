import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import './database'
import productosRoute from './routes/productos.routes'

/*** CONFIGURACIONES ***/
/* Instancia de express */
const app = express();

/* Creacion de puerto */
app.set('port', process.env.PORT || 4001)
app.listen(app.get('port'), ()=>{
    console.log(`Desde el puerto ${app.get('port')}`)
})

/* Herramientas extras - Middlewares*/
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../public')))

/* Rutas */
app.use('/cafeteria', productosRoute)