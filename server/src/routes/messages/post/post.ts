import { Router } from 'express';
let postMessageRoute = Router();

postMessageRoute.post('/', (req: any, res: any) => {
  res.send("post message");
});

export default postMessageRoute;