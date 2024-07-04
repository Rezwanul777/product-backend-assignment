import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import { TProduct } from "./product.interface";

// create product
const createProduct = async (req: Request, res: Response) => {
    try {
  
        const productData: TProduct = req.body;;
     
      const result = await ProductServices.createProductIntoDB(productData);
    //   if(error){
    //     res.status(500).json({
    //       success: false,
    //       message: 'Something went wrong',
    //       error: error.details,
    //   })
      
    
      
      res.status(200).json({
        success: true,
        message: 'Product created successfully',
        data: result,
      })
    } catch (err:any) {
      res.status(500).json({
        success: false,
        message: err.message ||'Something went wrong',
        error: err,
      });
    }
  };

//get all products
  const getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await ProductServices.getAllProductIntoDB();
      res.status(200).json({
        success: true,
        message: 'All products fetched successfully',
        data: products,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }

  // get single product

  const getSingleProduct= async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const product = await ProductServices.getSingleProductIntoDB(productId);
      if(!product){
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully',
        data: product,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err,
      });
    }
  }



  export const ProductControllers={
    createProduct,
    getAllProducts,
    getSingleProduct
  }