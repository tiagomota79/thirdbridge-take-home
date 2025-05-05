// import { auth0 } from '@/lib/auth0';
// import { redirect } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

const Home = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  // Please refer to the README - KNWON ISSUES section for more information on the commented out code

  // const session = await auth0.getSession();

  // if (!session) {
  //   return redirect('api/auth'); // Redirect to login if not authenticated
  // }

  const { id } = await params;

  if (!id) {
    return (
      <Card className='col-span-3'>
        <CardContent>
          <p className='text-center'>Sélectionnez un utilisateur</p>
        </CardContent>
      </Card>
    );
  }

  return <>{children}</>;
};

export default Home;
