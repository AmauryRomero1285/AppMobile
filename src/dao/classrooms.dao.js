const classroomDAO={};
import Classroom from '../models/Classrooms.js'

classroomDAO.getAll=async()=>{
    return await Classroom.find();
};
classroomDAO.getOne=async(classroom_ID)=>{
    return await Classroom.findOne({classroom_ID:classroom_ID});
};

export default classroomDAO;