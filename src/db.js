//Aquí van la conexión a la Base de Datos mongoose
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://amaury117:230190@db-mobile.dvimd.mongodb.net/school_control_db?retryWrites=true&w=majority&appName=DB-Mobile')
.then((db)=>console.log("MongoDB atlas connected"))
.catch((error)=>console.error(error));


export default mongoose;