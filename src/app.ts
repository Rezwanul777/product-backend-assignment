
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/products/product.route';
import { OrderRoutes } from './modules/products/orders/order.route';


const app: Application = express();

// parser uses

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;