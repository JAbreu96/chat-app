import { Router } from 'express';
import retrieveMessageRoute from './read/read';
import postMessageRoute from './post/post';
let messageRoutes = Router();

messageRoutes.use('/post', postMessageRoute);
messageRoutes.use('/get', retrieveMessageRoute);

export default messageRoutes;