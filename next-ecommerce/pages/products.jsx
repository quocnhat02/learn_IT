import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      const data = await res.data;
      console.log(data);
    };
    fetchProducts();
  });

  return (
    <Layout>
      <Link
        className='bg-blue-900 text-white rounded-md py-1 px-2'
        href={'/products/new'}
      >
        Add new product
      </Link>
    </Layout>
  );
};

export default Products;
