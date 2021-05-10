"use strict";
module.exports = (sequelize, DataTypes) => {
  var Grade = sequelize.define("Grade", {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
  Grade.associate = function (models) {
    Grade.hasMany(models.Student, {
      as: "Student",
    });
    // Grade.hasMany(models.Teachers, {
    //   as: "Teachers",
    // });
  };
  return Grade;
};
