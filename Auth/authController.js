var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require("../models/indexModel").User;
var VerifyToken = require("./VerifyToken");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../config");

router.post("/register", function (req, res) {
  console.log(req.body);
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashedPassword);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  })
    .then(function (user) {
      // create a token
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // expires in 24 hours
      });

      //SETTING THE COOKIE
      res.cookie("jwt", token);

      res.status(200).send({ auth: true, token: token, body: user });
    })
    .catch((error) => res.status(500).send(error));
});

router.get("/me", VerifyToken, function (req, res, next) {
  User.findAll({
    where: { id: req.userId },
    attributes: { exclude: ["password"] },
  })
    .then(function (user) {
      if (!user) return res.status(404).send("No user found.");
      // res.status(200).send(user);
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send("There was a problem finding the user.");
    });
});

router.post("/login", function (req, res) {
  User.findAll({ where: { email: req.body.email } })
    .then(function (user) {
      console.log(user[0], req.body);
      if (!user) return res.status(404).send("No user found.");

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user[0].dataValues.password
      );
      if (!passwordIsValid)
        return res.status(401).send({ auth: false, token: null });

      var token = jwt.sign({ id: user[0].dataValues.id }, config.secret, {
        expiresIn: 86400, // expires in 24 hours
      });

      res.cookie("jwt", token);

      res.status(200).send({ auth: true, token: token });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error on the server.:");
    });
});

module.exports = router;
