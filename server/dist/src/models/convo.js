"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Convo extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ;
    Convo.init({
        latest_message: DataTypes.STRING,
        user1: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'users',
                    schema: 'schema'
                },
                key: 'id'
            }
        },
        user2: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'users',
                    schema: 'schema'
                },
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Convo',
    });
    return Convo;
};
//# sourceMappingURL=convo.js.map