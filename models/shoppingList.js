// models/ShoppingList.js

module.exports = (sequelize, DataTypes) => {
    const ShoppingList = sequelize.define('ShoppingList', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      items: {
        type: DataTypes.JSON, // Storing items as a JSON array
        allowNull: false,
        validate: {
          isArray(value) {
            if (!Array.isArray(value)) {
              throw new Error('Items should be an array.');
            }
          },
        },
      },
      // Foreign key to User
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Name of the User table
          key: 'id',
        },
        onDelete: 'CASCADE', // Delete shopping lists if the associated user is deleted
      },
    }, {
      tableName: 'shopping_lists',
      timestamps: true, // Adds createdAt and updatedAt fields
    });
  
    // Define associations
    ShoppingList.associate = (models) => {
      ShoppingList.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
  
    return ShoppingList;
  };
  