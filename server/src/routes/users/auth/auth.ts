import { Router } from 'express';
import io from '../../../socket_controller/init';
let authRoute = Router();
import db from '../../../../models/index';

const authenticate = async (email: string, password: string) => {
  let queryStr = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  try {
    await db.sequelize.authenticate();

    db.sequelize.query(queryStr).then((data: any) => { console.log(data) });

    await db.sequelize.close();
  }
  catch {
    console.log('Not connected');
    return false;
  }
  finally {
    return true;
  }
};

io.open().use(async (socket: any, next: any) => {
  if (await authenticate('jc_abreu', 'gird')) {
    console.log('Access Granted');
  } else {
    console.log('Access Denied');
  }
  next();
})
  .on('connection', (socket: any) => {
    console.log('user has connected');

  });


// authRoute.get('/', (req: any, res: any) => {
//   // const { password, username, email } = req.body;

//   authenticate();


//   res.send("Auth");
// });

export default authRoute;