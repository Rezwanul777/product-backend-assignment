import { Router } from 'express';
import { OrderControllers } from './order.controllers';


const router = Router();

// Order routes
router.post('/', OrderControllers.createOrder);

export const OrderRoutes = router;