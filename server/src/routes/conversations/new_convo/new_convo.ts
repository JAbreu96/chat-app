import { Router } from 'express';
let newConvoRoute = Router();

newConvoRoute.post('/', (req: any, res: any) => {
  res.send("post conversation");
});

export default newConvoRoute;