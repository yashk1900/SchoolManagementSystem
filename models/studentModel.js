"use strict";
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roll: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    GradeId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  });
  Student.associate = function (models) {
    Student.belongsTo(models.Grade, {
      foreignKey: "GradeId",
      as: "Student",
    });
  };
  return Student;
};
