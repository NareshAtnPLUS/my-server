import express, { Router } from 'express'
import appController from '../controller/AppController';
const appRouter: express.Router = Router();

appRouter.get('/greet', appController.greet)
appRouter.get('/health', appController.health)

export default appRouter;
