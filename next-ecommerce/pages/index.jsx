import { useSession, signIn, signOut } from 'next-auth/react';

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
  return <h2>Logged in {session.user.email}</h2>;
}
