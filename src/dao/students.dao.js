//Aqui se comunica con la base de datos
const studentDAO={};
import Student from '../models/Student.js'

studentDAO.getAll=async()=>{
    return await Student.find();
};
studentDAO.getOne=async(student_id)=>{
    return await Student.findOne({stundent_id:student_id});//no confundir el atributo con el metodo de busqueda
};
studentDAO.insert=async(student)=>{
    return await Student.create(student);
}

export default studentDAO;