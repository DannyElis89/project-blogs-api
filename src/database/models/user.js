const user = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    timestamps: false
})

  return user;
};

module.exports = user;
