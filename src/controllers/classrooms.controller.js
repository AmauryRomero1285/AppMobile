import classroomDAO from '../dao/classrooms.dao.js'

const classroomsController={};
classroomsController.getAll=(req,res)=>{
    classroomDAO.getAll().then((classrooms)=>{
        res.json({
            data:classrooms,
        });
    })
    .catch(()=>{
        res.json({
            data:{
                message:error,
            },
        });
    });
};

export default classroomsController;