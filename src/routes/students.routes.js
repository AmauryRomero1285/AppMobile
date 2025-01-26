//Rutas para los estudiantes
import { Router } from 'express';
import studentsController from '../controllers/students.controller.js';
import studentDAO from '../dao/students.dao.js';

const studentsRoutes = Router();
studentsRoutes.get('/getAll',studentsController.getAll);
studentsRoutes.get('/getOne/:student_id',studentsController.getOne);
studentsRoutes.post('/insert',studentsController.insert);
studentsRoutes.put('/updateOne/:student_id',studentsController.updateOne);
studentsRoutes.delete('/deleteOne/:student_id',studentsController.deleteOne);

export default studentsRoutes;