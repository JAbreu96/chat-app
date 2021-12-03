import { Router } from 'express';
import authRoute from './auth/auth';
import registerRoute from './register/register';
let userRoutes = Router();

userRoutes.use('/auth', authRoute);
userRoutes.use('/register', registerRoute);

export default userRoutes;