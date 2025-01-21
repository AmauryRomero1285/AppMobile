import { Router } from "express";
import teachersController from '../controllers/teachers.controller.js';

const teachersRoutes=Router();
teachersRoutes.get('/getAll',teachersController.getAll);
teachersRoutes.get('/getOne/:teacher_number',teachersController.getOne);

export default teachersRoutes;