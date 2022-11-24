const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animals extends Model {}

Animals.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    animal_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animal_breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animals'
  }
);

module.exports = Animals;
