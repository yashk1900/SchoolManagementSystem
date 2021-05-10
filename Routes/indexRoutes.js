const teacherController = require("../Controller/teacherController");
const studentController = require("../Controller/studentController");
const gradeController = require("../Controller/gradeContoller");
const VerifyToken = require("../Auth/verifyToken");
module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(200).send({ message: "Welcome to api" })
  );

  app.post("/api/teacher", VerifyToken, teacherController.create);
  app.get("/api/teachers", VerifyToken, teacherController.getAll);
  app.patch("/api/teacher/:id", VerifyToken, teacherController.update);
  app.delete("/api/teacher/:id", VerifyToken, teacherController.delete);

  app.post("/api/student", VerifyToken, studentController.create);
  app.get("/api/students", VerifyToken, studentController.getAll);
  app.patch("/api/student/:id", VerifyToken, studentController.update);
  app.delete("/api/student/:id", VerifyToken, studentController.delete);

  app.post("/api/grade", VerifyToken, gradeController.create);
  app.get("/api/grades", VerifyToken, gradeController.getAll);
  app.patch("/api/grade/:id", VerifyToken, gradeController.update);
  app.delete("/api/grade/:id", VerifyToken, gradeController.delete);
};
