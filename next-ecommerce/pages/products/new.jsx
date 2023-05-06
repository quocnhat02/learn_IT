import { useState } from 'react';
import Layout from '../../components/Layout';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Layout>
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
      <button className='btn-primary'>Save</button>
    </Layout>
  );
};

export default NewProduct;
