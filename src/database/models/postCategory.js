const postCategory = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
          model: 'BlogPost',
          key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId',
      as: 'BlogPosts',
      through: postCategories,
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'Categories',
      through: postCategories,
      otherKey: 'postId',
    });
  }

  return postCategories;
};

module.exports = postCategory;
