import express from 'express';
import { StatusCodes } from 'http-status-codes';
import os from 'os'
class AppController {
  greet = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(StatusCodes.OK).send({
      message: 'Hello World'
    })
  }
  health = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(StatusCodes.OK).send({
      message: 'Im fine',
      cpu: os.cpus(),
      totalMemory: os.totalmem()
    })
  }
}
const appController = new AppController()
export default appController