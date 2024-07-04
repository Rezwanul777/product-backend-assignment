import { Schema } from 'mongoose';

export type TVariant ={
    type: string;
    value: string;
}

export type TInventory ={
    quantity: number;
    inStock: boolean;
}
export type TOrder = {
    email: string;
    productId: Schema.Types.ObjectId;
    price: number;
    quantity: number;
  }

export type TProduct ={
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: TVariant[];
    inventory: TInventory;
    order:TOrder[]
}

