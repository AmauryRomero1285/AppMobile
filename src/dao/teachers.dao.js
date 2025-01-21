const teacherDAO={};
import Teacher from '../models/Teachers.js'

teacherDAO.getAll=async()=>{
    return await Teacher.find();
};
teacherDAO.getOne=async(teacher_number)=>{
    return await Teacher.findOne({teacher_number:teacher_number});
}
export default teacherDAO;