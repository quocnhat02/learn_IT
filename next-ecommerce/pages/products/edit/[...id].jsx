import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { useEffect } from 'react';
import axios from 'axios';

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/api/products?id=${id}`).then((res) => {
      console.log(res);
    });
  }, [id]);

  return <Layout>Edit product</Layout>;
};

export default EditProduct;
