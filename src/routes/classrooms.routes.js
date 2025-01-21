import { Router } from "express";
import classroomController from '../controllers/classrooms.controller.js'

const classroomRoutes=Router();
classroomRoutes.get('/getAll',classroomController.getAll);

export default classroomRoutes;