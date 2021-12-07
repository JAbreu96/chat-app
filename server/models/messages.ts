import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  messages.init({
    sender: DataTypes.STRING,
    message: DataTypes.STRING,
    readReceipt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};