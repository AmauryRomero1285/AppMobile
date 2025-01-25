//Rutas para los estudiantes
import { Router } from 'express';
import studentsController from '../controllers/students.controller.js';
import studentDAO from '../dao/students.dao.js';

const studentsRoutes = Router();
studentsRoutes.get('/getAll',studentsController.getAll);
studentsRoutes.get('/getOne/:student_id',studentsController.getOne);
studentsRoutes.post('/insert',studentsController.insert);
studentsRoutes.post('/updateOne',studentsController.updateOne);

export default studentsRoutes;