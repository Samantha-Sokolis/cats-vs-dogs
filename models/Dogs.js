const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dogs extends Model {}

Dogs.init(
  {
    dog_breed: {
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
    energy_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    daily_walks: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
    modelName: 'dogs'
  }
);

module.exports = Dogs;
