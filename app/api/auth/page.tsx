import { auth0 } from '@/lib/auth0';
// import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await auth0.getSession();
  console.log('Session:', session);

  // if (session) {
  //   return redirect('/'); // Redirect to home if already logged in
  // }

  return (
    <main className='flex flex-col items-center justify-center h-[100vh] space-y-12'>
      <a href='/auth/login'>Click Here to Log in</a>
      <p className='italic text-xs'>
        Under development, not working properly yet
      </p>
    </main>
  );
};

export default Login;
