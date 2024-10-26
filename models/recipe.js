// models/Recipe.js

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ingredients: {
        type: DataTypes.JSON, // Storing ingredients as a JSON array
        allowNull: false,
        validate: {
          isArray(value) {
            if (!Array.isArray(value)) {
              throw new Error('Ingredients should be an array.');
            }
          },
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // Foreign key to User
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Name of the User table
          key: 'id',
        },
        onDelete: 'CASCADE', // Delete recipes if the associated user is deleted
      },
    }, {
      tableName: 'recipes',
      timestamps: true, // Adds createdAt and updatedAt fields
    });
  
    // Define associations
    Recipe.associate = (models) => {
      Recipe.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
  
    return Recipe;
  };
  