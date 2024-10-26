// models/User.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Add more attributes as needed
    }, {
      tableName: 'users',
      timestamps: true,
    });
  
    // Define associations
    User.associate = (models) => {
      User.hasMany(models.Recipe, {
        foreignKey: 'userId',
        as: 'recipes',
        onDelete: 'CASCADE',
      });
  
      User.hasMany(models.ShoppingList, {
        foreignKey: 'userId',
        as: 'shoppingLists',
        onDelete: 'CASCADE',
      });
    };
  
    return User;
  };
  