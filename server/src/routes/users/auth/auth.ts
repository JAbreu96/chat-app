import { Router } from 'express';
import io from '../../../socket_controller/init';
let authRoute = Router();
import db from '../../../../models/index';
import { any } from 'sequelize/dist/lib/operators';

const authenticate = async (email: string, password: string) => {
  let queryStr = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  let data = await db.sequelize.query(queryStr);

  if (!data[0].length) {
    return false;
  };

  return true;
};

io.open().use(async (socket: any, next: any) => {
  if (await authenticate('jc_abreu', 'gird')) {
    return next();
  } else {
    return next(new Error('Authentication Error'));
  }
})
  .on('connection', (socket: any) => {
    console.log('user has connected');
  })
  .on('error', (socket: any) => {
    console.log('user has not connected');
  })

export default authRoute;