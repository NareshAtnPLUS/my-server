import express from 'express';
import { StatusCodes } from 'http-status-codes';
import os from 'os'
import { hexToRGB, RGBToHex } from './converter';
class AppController {
  greet = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<express.Response> => {
    return res.status(StatusCodes.OK).send({
      message: 'Hello World'
    })
  }
  health = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<express.Response> => {
    return res.status(StatusCodes.OK).send({
      message: 'Im fine',
      cpu: os.cpus(),
      totalMemory: os.totalmem()
    })
  }
  rgbToHex = async (req: express.Request, res: express.Response): Promise<express.Response> => {

    const red = parseInt(String(req.query.red), 10);
    const green = parseInt(String(req.query.green), 10);
    const blue = parseInt(String(req.query.blue), 10);
    const hex = RGBToHex(red, green, blue);
    return res.status(StatusCodes.OK).send({ message: hex });

  }
  hexToRgb = async (req: express.Request, res: express.Response): Promise<express.Response> => {
    var hex = String(req.query.hex);
    var rgb = hexToRGB(hex);
    return res.status(StatusCodes.OK).send({ message: JSON.stringify(rgb) });
  }
}
const appController = new AppController()
export default appController