const user = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    id: DataTypes.NUMBER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  })

  return user;
};

module.exports = user;
