import { Router } from 'express';
let authRoute = Router();
import sequelize from "../../../db/db_connection/db.js";

authRoute.get('/', (req: any, res: any) => {
  const authenticate = async () => {
    try {
      await sequelize.authenticate();
      console.log('db has connected');
      sequelize.close();
    } catch {
      console.log('Not connected');
    }

  }

  authenticate();


  res.send("Auth");
});

export default authRoute;