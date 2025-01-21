//Aquí se procesan las peticiones provenientes del routes
import { response } from "express";
import studentDAO from "../dao/students.dao.js";

const studentsController = {};

studentsController.getAll = (req, res) => {
  studentDAO
    .getAll()
    .then((students) => {
      res.json({
        //Aqui se le pide a DAO los datos de los estudiantes
        data: students,
      });
    })
    .catch((error) => {
      res.json({
        data: {
          message: error,
        },
      });
    });
};

studentsController.getOne = (req, res) => {
  studentDAO.getOne(req.params.student_id)
    .then((students) => {
      if (students != null)
        res.json({ data: students });
      else
        res.json({ message: "Student not found" });
    });
};

studentsController.insert = (req, res) => {
  studentDAO.insert(req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Student saved",
          student: response
        }
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } })
    });



}

export default studentsController;
