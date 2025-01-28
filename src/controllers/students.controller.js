//Aquí se procesan las peticiones provenientes del routes
import studentDAO from "../dao/students.dao.js";

const studentsController = {};

studentsController.getAll = (req, res) => {
  studentDAO
    .getAll()
    .then((students) => {
      console.log(students);
     /* res.json({
        //Aqui se le pide a DAO los datos de los estudiantes
        data: students,
      });*/
       res.render('../src/views/index.ejs');//guia la renderización a la carpeta
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
  studentDAO.getOne(req.params.student_id).then((students) => {
    if (students != null) res.json({ data: students });
    else res.json({ message: "Student not found" });
  });
};

studentsController.insert = (req, res) => {
  studentDAO
    .insert(req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Student saved",
          student: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

studentsController.updateOne = (req, res) => {
  studentDAO
    .updateOne(req.params.student_id, req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Student updated successfully",
          student: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};
studentsController.deleteOne = (req, res) => {
  studentDAO
    .deleteOne(req.params.student_id)
    .then((response) => {
      res.json({
        data: {
          message: "Student deleted successfully",
          student: response,
        },
      });
    })
    .catch((error) => {
      data: {
        message: error;
      }
    });
};

export default studentsController;
