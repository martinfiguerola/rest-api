const { DataTypes } = require('sequelize')

module.exports = function(sequelize){
  return sequelize.define('records', {
    field_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    my_numeric_field: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
  })
}