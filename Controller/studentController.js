const Student = require("../models/indexModel").Student;
module.exports = {
  create(req, res) {
    return Student.create({
      name: req.body.name,
      roll: req.body.roll,
    })
      .then((student) => {
        res.status(201).send(student);
      })
      .catch((error) => res.status(400).send(error));
  },
  getAll(req, res) {
    return Student.findAll()
      .then((studentList) => {
        res.status(201).send(studentList);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  update(req, res) {
    const id = req.params.id;
    console.log(id);
    Student.update(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Student udated successfully",
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Student with id=" + id,
          error: err,
        });
      });
  },
  delete(req, res) {
    const id = req.params.id;
    console.log(id);
    Student.destroy(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Student deleted successfully" });
        } else {
          res.send({
            message: `Cant delete Student with id =${id}. Student not found or req.body is empty`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error Deleting Student with id=" + id,
        });
      });
  },
};
