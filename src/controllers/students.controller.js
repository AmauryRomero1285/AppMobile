//Aquí se procesan las peticiones provenientes del routes
import studentDAO from "../dao/students.dao.js";

const studentsController = {};

studentsController.getAll = (req, res) => {
    studentDAO.getAll().then((students) => {
        res.json({
            //Aqui se le pide a DAO los datos de los estudiantes
            data: students,
        });
    }).catch(() => {
        res.json({
            data: {
                message: error
            }
        })
    });

};

export default studentsController;