import { Router } from 'express';
import getConvoRoute from './get_convo/get_convo';
import newConvoRoute from './new_convo/new_convo';
let conversationRoutes = Router();

conversationRoutes.use('/read', getConvoRoute);
conversationRoutes.use('/new', newConvoRoute);

export default conversationRoutes;