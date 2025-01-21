import teacherDAO from '../dao/teachers.dao.js';

const teachersController={};
teachersController.getAll=(req,res)=>{
    teacherDAO.getAll().then((teachers)=>{
        res.json({
            data:teachers,
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

export default teachersController;