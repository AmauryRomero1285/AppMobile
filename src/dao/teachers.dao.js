const teacherDAO={};
import Teacher from '../models/Teachers.js'

teacherDAO.getAll=async()=>{
    return await Teacher.find();
};

export default teacherDAO;