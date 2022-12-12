import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PushOrderController from "@controllers/push.order.controller";

class PushOrderRoute implements Routes {
  public path = '/push/order';
  public router = Router();
  public pushOrderController = new PushOrderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.pushOrderController.sendNotify);
  }
}

export default PushOrderRoute;
