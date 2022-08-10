const postCategory = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      references: {
        model: 'BlogPost',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
      timestamps: false,
      tableName: 'PostCategories',
  });

  postCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      through: postCategories,
    }),
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
      through: postCategories,
    });
  }

  return postCategories;
};

module.exports = postCategory;
