import { Router } from 'express';
let retrieveMessageRoute = Router();

retrieveMessageRoute.get('/', (req: any, res: any) => {
  res.send("retrieve message");
});

export default retrieveMessageRoute;