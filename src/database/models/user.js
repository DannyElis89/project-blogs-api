const user = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },{
    timestamps: false,
    tableName: 'Users'
  })

  user.associate = models => {
    user.hasMany(models.BlogPost, { as: 'BlogPosts', foreignKey: 'id'})
  }

  return user;
};

module.exports = user;
