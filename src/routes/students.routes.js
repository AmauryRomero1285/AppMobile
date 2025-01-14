//Rutas para los estudiantes
import {Router} from 'express';
const studentsRoutes=Router();
studentsRoutes.get('/getOne',(req,res)=>{
    res.json({
        data:"student"
    });
});

export default studentsRoutes;