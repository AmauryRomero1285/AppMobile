import classroomDAO from '../dao/classrooms.dao.js'

const classroomsController = {};
classroomsController.getAll = (req, res) => {
    classroomDAO.getAll().then((classrooms) => {
        res.json({
            data: classrooms,
        });
    })
        .catch((error) => {
            res.json({
                data: {
                    message: error,
                },
            });
        });
};
classroomsController.getOne = (req, res) => {
    classroomDAO.getOne(req.params.classroom_ID)
        .then((classrooms) => {
            if (classrooms != null)
                res.json({ data: classrooms });
            else
                res.json({ data: { message: "Classroom not found" } });
        });
};

export default classroomsController;