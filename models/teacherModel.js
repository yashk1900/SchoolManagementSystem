"use strict";
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define("Teacher", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Teacher.associate = function (models) {
    // Teacher.belongsTo(models.Grade, {
    //   foreignKey: "teacherId",
    //   as: "Teacher",
    // });
  };
  return Teacher;
};
