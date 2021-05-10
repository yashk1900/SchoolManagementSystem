const Grade = require("../models/indexModel").Grade;
module.exports = {
  create(req, res) {
    return Grade.create({
      value: req.body.value,
    })
      .then((grade) => {
        res.status(201).send(grade);
      })
      .catch((error) => res.status(400).send(error));
  },
  getAll(req, res) {
    return Grade.findAll()
      .then((gradeList) => {
        res.status(201).send(gradeList);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  update(req, res) {
    const id = req.params.id;
    console.log(id);
    Grade.update(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Grade udated successfully",
          });
        } else {
          res.send({
            message: `Cannot update Grade with id=${id}. Maybe Grade was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Grade with id=" + id,
        });
      });
  },
  delete(req, res) {
    const id = req.params.id;
    console.log(id);
    Grade.destroy(req.body, { where: { id: id } })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Grade deleted successfully" });
        } else {
          res.send({
            message: `Cant delete Grade with id =${id}. Grade not found or req.body is empty`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error Deleting Grade with id=" + id,
        });
      });
  },
};
