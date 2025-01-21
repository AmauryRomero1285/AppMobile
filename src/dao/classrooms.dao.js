const classroomDAO={};
import Classroom from '../models/Classrooms.js'

classroomDAO.getAll=async()=>{
    return await Classroom.find();
};

export default classroomDAO;