import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Convo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Convo.init({
    latest_message: DataTypes.STRING,
    participants: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Convo',
  });
  return Convo;
};