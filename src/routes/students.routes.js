//Rutas para los estudiantes
import { Router } from 'express';
import studentsController from '../controllers/students.controller.js';

const studentsRoutes = Router();
studentsRoutes.get('/getAll',studentsController.getAll);

export default studentsRoutes;