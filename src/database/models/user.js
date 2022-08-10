const UserSchema = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  },{
    timestamps: false,
    tableName: 'Users',
  })

  Users.associate = models => {
    Users.hasMany(models.BlogPost, { as: 'BlogPosts', foreignKey: 'id'})
  }

  return Users;
};

module.exports = UserSchema;
