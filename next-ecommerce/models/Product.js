import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

export const Product = model('Product', ProductSchema);
