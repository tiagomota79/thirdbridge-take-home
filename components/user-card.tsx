import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getUserById } from '@/lib/actions/user.actions';

const UserCard = async ({ userId }: { userId: number }) => {
  const user = await getUserById(userId);

  if (!user) {
    return (
      <Card className='md:row-span-2'>
        <CardContent>
          <p className='text-center'>Utilisateur non trouvé</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='md:row-span-2'>
      <CardContent className='grid content-between h-full'>
        <div className='text-center md:text-left md:flex items-center md:space-x-10'>
          <div className='flex justify-center md:justify-start pb-4 md:pb-0'>
            <Image
              src={user.avatar}
              alt={user.name}
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>{user.name}</h2>
            <p className='text-gray-500'>@{user.tag}</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <p>{user.location}</p>
          <p>{user.jobTitle}</p>
          <p>
            {new Date(user.dateStarted).toLocaleDateString('fr-CA', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <p>{user.numPosts} publications</p>
        </div>
        <div className='grid md:flex md:space-x-4 md:justify-start'>
          <Button className='mt-4 cursor-pointer' variant='outline'>
            Publier
          </Button>
          <Button className='mt-4 cursor-pointer bg-blue-300' variant='outline'>
            Paramètres
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
