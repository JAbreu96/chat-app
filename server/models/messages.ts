import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Messages.init({
    sender_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    other_user: DataTypes.INTEGER,
    readReceipt: DataTypes.ARRAY(DataTypes.INTEGER),
    convo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};