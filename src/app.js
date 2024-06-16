//Importamos express
import express from 'express'
//importamos las rutas
import eventosRoute from './routes/eventos.routes.js'

//Definimos una instancia de express y la ejecutamos
const app = express();

// Usamos un middleware para manejar datos JSON
app.use(express.json());

// Definimos la ruta base '/api/' para las rutas relacionadas con los eventos
app.use('/api/', eventosRoute);

//En caso de error con un endpoint mostramos un mensaje
app.use((req,res,next) =>{
    res.status(404).json({
        message:'Endpoint Not Found'
    })
})

//Exportamos la instancia
export default app;