import teacherDAO from '../dao/teachers.dao.js';

const teachersController = {};
teachersController.getAll = (req, res) => {
    teacherDAO.getAll().then((teachers) => {
        res.json({
            data: teachers,
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
teachersController.getOne = (req, res) => {
    teacherDAO.getOne(req.params.teacher_number)
        .then((teachers) => {
            if (teachers != null)
                res.json({ data: teachers });
            else
                res.json({ data: { message: "Teacher not found" } });
        })
};

export default teachersController;