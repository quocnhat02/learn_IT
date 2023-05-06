import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productInfo, setProductInfo] = useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/api/products?id=${id}`).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  const goBack = () => {
    router.push('/products');
  };

  return (
    <Layout>
      <h3>Do you really want to delete "{productInfo?.title}" ?</h3>
      <button>Yes</button>
      <button onClick={goBack}>No</button>
    </Layout>
  );
};

export default DeleteProduct;
