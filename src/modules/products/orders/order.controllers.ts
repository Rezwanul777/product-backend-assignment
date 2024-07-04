// order controller

import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { TOrder } from './order.interface';

const createOrder = async (req: Request, res: Response) => {
    try {
      const orderData: TOrder = req.body;
      const result = await OrderServices.createOrderDB(orderData);
      res.status(201).json({
        success: true,
        message: 'Order created successfully',
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
}

export const OrderControllers={
    createOrder
}
  