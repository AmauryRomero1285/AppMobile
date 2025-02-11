//Aquí se procesan las peticiones provenientes del routes
import studentDAO from "../dao/students.dao.js";

const studentsController = {};

studentsController.getAll = (req, res) => {
  studentDAO
    .getAll()
    .then((student) => {
      console.log(student);
      res.json({
        //Aqui se le pide a DAO los datos de los estudiantes
        data: student,
      });
      // res.render('../src/views/index.ejs',{student});//guia la renderización a la carpeta
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
  studentDAO.getOne(req.params.student_id).then((student) => {
    if (student != null) res.json({ data: student });
    else res.json({ message: "Student not found" });
    //res.render('../src/views/edit.ejs',{student});
  });
};

studentsController.insert = (req, res) => {
  studentDAO
    .insert(req.body)
    .then((student) => {
      res.json({
        data: {
          message: "Student saved",
          student: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
     // res.redirect('/api/students/getAll')//redirigimos al getAll
    });
};

studentsController.updateOne = (req, res) => {
  studentDAO
    .updateOne(req.params.student_id, req.body)
    .then((student) => {
      res.json({
        data: {
          message: "Student updated successfully",
          student: response,
        },
      });
      //res.redirect('/api/students/getAll');
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
      //res.redirect('/api/students/getAll')
    })
    .catch((error) => {
      data: {
        message: error;
      }
    });
};

export default studentsController;
