import { useState } from 'react';
import Layout from './Layout';
import { useRouter } from 'next/router';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  const createProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post('/api/products', data);
    setGoToProducts(true);
  };

  if (goToProducts) {
    router.push('/products');
  }

  return (
    <form onSubmit={createProduct}>
      <h1>New Product</h1>
      <label>Product name</label>
      <input
        type='text'
        placeholder='product name'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price (in USE)</label>
      <input
        type='text'
        placeholder='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type='submit' className='btn-primary'>
        Save
      </button>
    </form>
  );
};

export default ProductForm;
