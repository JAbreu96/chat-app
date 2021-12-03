import { Router } from 'express';
let getConvoRoute = Router();

getConvoRoute.get('/', (req: any, res: any) => {
  res.send("get conversation");
});

export default getConvoRoute;