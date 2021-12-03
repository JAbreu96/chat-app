import { Router } from 'express';
import userRoutes from './users/index';
import messageRoutes from './messages/index';
import conversationRoutes from './conversations/index';
let masterRoutes = Router();

masterRoutes.use('/user', userRoutes);
masterRoutes.use('/messages', messageRoutes);
masterRoutes.use('/convo', conversationRoutes);

export default masterRoutes;