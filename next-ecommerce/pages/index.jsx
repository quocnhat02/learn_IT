import { useSession, signIn, signOut } from 'next-auth/react';
import Nav from '../components/Nav';

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className='bg-blue-700 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button
            className='bg-white py-2 px-4 rounded-lg'
            onClick={() => signIn('google')}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-blue-900 min-h-screen flex'>
      <Nav />
      <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>
        Logged in {session.user.email}
      </div>
    </div>
  );
}
