import { Router } from "express";
import classroomController from '../controllers/classrooms.controller.js'

const classroomRoutes=Router();
classroomRoutes.get('/getAll',classroomController.getAll);
classroomRoutes.get('/getOne/:classroom_ID',classroomController.getOne);

export default classroomRoutes;