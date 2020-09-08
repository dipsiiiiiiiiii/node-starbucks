const { DataTypes } = require('sequelize');

const ATTRIBUTE_STRING_OPTION = {
  type: DataTypes.STRING,
  allowNull: false,
};

const ATTRIBUTE_INT_OPTION = {
  type: DataTypes.INTEGER,
  allowNull: false,
  defaultValue: 0,
};

const TABLE_OPTION = {
  freezeTableName: true,
  paranoid: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
};

module.exports = {
  ATTRIBUTE_STRING_OPTION,
  ATTRIBUTE_INT_OPTION,
  TABLE_OPTION,
};
