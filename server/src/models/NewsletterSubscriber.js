const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class NewsletterSubscriber extends Model {}

NewsletterSubscriber.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    unsubscribeToken: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    lastEmailSentAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "NewsletterSubscriber",
    tableName: "newsletter_subscribers",
    timestamps: true,
  }
);

module.exports = NewsletterSubscriber;
