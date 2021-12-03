import { Router } from 'express';
let authRoute = Router();

authRoute.get('/', (req: any, res: any) => {
  res.send("Auth");
});

export default authRoute;