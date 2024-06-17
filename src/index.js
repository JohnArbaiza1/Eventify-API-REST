//Importamos la instancia de express
import app from './app.js'

//importamos la variable de entorno relacionada con el puerto
import { PORT } from './Config.js';

//Indicamos el puerto que debe escuchar
app.listen(PORT);

