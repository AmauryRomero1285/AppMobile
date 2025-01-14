//Aquí va la configuración del Servidor
import express from 'express';//sirve para crear
import morgan from 'morgan';
import studentsRoutes from './routes/students.routes.js';
const app=express();

//Settings
app.set('port',process.env.PORT||3000);

//Midelwares
app.use(express.json());//lee los datos json
app.use(express.urlencoded({extended:true}));//entiende formularios
app.use(morgan('dev'));//vizualizar las peticiones en consola (saber si llegó o no la petición)**se activa aquí**

//Routes
app.use("/api/students", studentsRoutes);//envia a una ruta para activar el controlador(crea la ruta)[invoca una función]**Es un apuntador**

export default app;