import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// create product DB
const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// get all products from db

const getAllProductIntoDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductIntoDB = async (id: string) => {
   
        // const result = await Product.findOne({productId: id });
        const result = await Product.aggregate([{ $match: {productId: id } }]); // using aggregate
        return result;
      
      };



export const ProductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB
};
