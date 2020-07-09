import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessiosnsRouter = Router();
const sessionsControler = new SessionsController();

sessiosnsRouter.post('/', sessionsControler.create);

export default sessiosnsRouter;
