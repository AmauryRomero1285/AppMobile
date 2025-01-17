//Aqui se comunica con la base de datos
import student from './models/Students.js'
const studentDAO={};

studentDAO.getAll=async()=>{
    return await student.find();
};

export default studentDAO;