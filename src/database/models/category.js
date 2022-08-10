const category = (sequelize, DataTypes) => {
  const category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    tableName: 'Categories',
  })
  return category;
}
module.exports = category;
