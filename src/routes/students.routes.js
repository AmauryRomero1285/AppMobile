//Rutas para los estudiantes
import { Router } from 'express';
const studentsRoutes = Router();
studentsRoutes.get('/getOne', (req, res) => {
    res.json({
        data: "student"
    });
});
studentsRoutes.post('/', (req, res) => {
    res.json({
        data: "Adiós"
    })
});
export default studentsRoutes;