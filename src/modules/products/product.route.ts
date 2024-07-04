import express from 'express'
import { ProductControllers } from './product.controller';

const router = express.Router()

// call controller
// Product Route
router.post('/',ProductControllers.createProduct)
router.get('/',ProductControllers.getAllProducts)
router.get('/:productId',ProductControllers.getSingleProduct)
router.put('/:productId',ProductControllers.productUpdate)
router.delete('/:productId',ProductControllers.productDelete)

// order route
router.post('/',ProductControllers.createOrder)

export const ProductRoutes=router;