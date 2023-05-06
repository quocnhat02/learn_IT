import { useState } from 'react';
import Layout from '../../components/Layout';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const createProduct = (e) => {
    e.preventDefault();
    const data = { title, description, price };
    axios.post('/api/products', data);
  };

  return (
    <Layout>
      <form action='' onSubmit={createProduct}>
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
    </Layout>
  );
};

export default NewProduct;
