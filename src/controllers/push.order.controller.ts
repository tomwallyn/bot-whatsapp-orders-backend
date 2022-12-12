import { NextFunction, Request, Response } from 'express';
import { Product } from '@interfaces/product.interface';
import { stringSimilarity } from "string-similarity-js";
import notifyService from "@services/notify.service";

class PushOrderController {
  public notifyService = new notifyService();

  public sendNotify = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(req.body.id)
      this.notifyService.newOrder(req.body);
      res.status(200).json({ data: "Success", message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default PushOrderController;
