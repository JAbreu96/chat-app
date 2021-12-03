import { Router } from 'express';
let registerRoute = Router();

registerRoute.post('/', (req: any, res: any) => {
  console.log("registered");
  res.send("registered");
});

export default registerRoute;