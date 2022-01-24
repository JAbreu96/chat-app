import { Sequelize } from 'sequelize';
// import { Pool, Client } from 'pg';
const connectionString: string = 'postgresql://jabreu:gird@localhost:5432/chat';

const initDB: any = {
  init: async () => {
    return await new Sequelize('chat', 'joelchristabreu', 'gird', {
      host: '127.0.0.1',
      dialect: 'postgres'
    })
  }
}
// const sequelize: any = new Sequelize('chat', 'joelchristabreu', 'gird', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// const sequelize: any = new Sequelize(connectionString);

export default initDB;