const user = (sequelize, DataTypes) => {
  const user = sequelize.define("Model", {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Users'
  })

  return user;
};

module.exports = user;
