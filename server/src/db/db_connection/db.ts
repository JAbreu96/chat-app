import { Sequelize } from 'sequelize';
import { Pool, Client } from 'pg';
const connectionString: string = 'postgresql://jabreu:gird@localhost:5432/chat';

// const pool: any = new Pool({
//   connectionString: connectionString,
// })

// const client: any = new Client({
//   connectionString: connectionString,
// })


const sequelize: any = new Sequelize('chat', 'jabreu', 'gird', {
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

export default sequelize;