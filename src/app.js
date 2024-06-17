//Importamos express
import express from 'express'
//importamos las rutas
import eventosRoute from './routes/eventos.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import eventUserRoutes from './routes/EventosUser.routes.js'
//Importamos la ruta que compruena la conexion con la DB
import indexRoutes from './routes/index.routes.js';

//Definimos una instancia de express y la ejecutamos
const app = express();

// Usamos un middleware para manejar datos JSON
app.use(express.json());

// Definimos la ruta base '/api/' para las rutas relacionadas con los eventos
app.use('/api/', eventosRoute);
//para las rutas relacionadas con las categorias
app.use('/api/',categoriaRoutes);
//rutas relacionada con el evento del usuario que se especifique
app.use('/api/',eventUserRoutes);
//Ruta de la conexion
app.use(indexRoutes);
//ruta de inicio
app.use('/', (req,res) => {
    res.json({
        message: 'welcome',
        name: "eventify-api-rest",
        version: "1.0.0",
    })

})

//En caso de error con un endpoint mostramos un mensaje
app.use((req,res,next) =>{
    res.status(404).json({
        message:'Endpoint Not Found'
    })
})

//Exportamos la instancia
export default app;