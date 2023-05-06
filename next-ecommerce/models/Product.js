import { Schema, model } from 'mongoose';
import Products from '../pages/products';

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

export const Product = model('Product', Products);
