"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectionString = 'postgresql://jabreu:gird@localhost:5432/chat';
// const pool: any = new Pool({
//   connectionString: connectionString,
// })
// const client: any = new Client({
//   connectionString: connectionString,
// })
const sequelize = new sequelize_1.Sequelize('chat', 'jabreu', 'gird', {
    host: 'localhost',
    dialect: 'postgres',
});
// (async function () {
//   try {
//     // client.connect();
//     // await sequelize.authenticate();
//     console.log('db has connected');
//     // sequelize.close();
//   } catch {
//     console.log(('Failed to connect to db'));
//   }
// })
exports.default = sequelize;
//# sourceMappingURL=db.js.map