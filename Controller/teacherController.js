const Teacher = require("../models/indexModel").Teacher;
module.exports = {
  create(req, res) {
    return Teacher.create({
      name: req.body.name,
    })
      .then((teacher) => {
        res.status(201).send(teacher);
      })
      .catch((error) => res.status(400).send(error));
  },
  getAll(req, res) {
    return Teacher.findAll()
      .then((teacherList) => {
        res.status(201).send(teacherList);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  update(req, res) {
    const id = req.params.id;
    console.log(id);
    Teacher.update(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Teacher udated successfully",
          });
        } else {
          res.send({
            message: `Cannot update Teacher with id=${id}. Maybe Teacher was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Teacher with id=" + id,
        });
      });
  },
  delete(req, res) {
    const id = req.params.id;
    console.log(id);
    Teacher.destroy(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Teacher deleted successfully" });
        } else {
          res.send({
            message: `Cant delete Teacher with id =${id}. Teacher not found or req.body is empty`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error Deleting Teacher with id=" + id,
        });
      });
  },
};
