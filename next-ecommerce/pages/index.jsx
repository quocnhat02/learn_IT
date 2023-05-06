import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className='text-blue-900 flex justify-between items-center'>
        <h2>
          Hello, <strong>{session?.user?.name}</strong>
        </h2>
        <div className='flex items-center bg-gray-300 text-black gap-1 rounded-lg overflow-hidden'>
          <img src={session?.user?.image} className='w-6 h-6' />
          <span className='px-2'>{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
