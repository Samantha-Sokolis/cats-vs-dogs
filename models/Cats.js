const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cats extends Model {}

Cats.init(
  {
    cat_breed: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colour: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cats'
  }
);

module.exports = Cats;
