import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from '@/types';

const FriendCard = ({ friend }: { friend: User }) => {
  return (
    <Card>
      <CardContent className='grid content-between h-full'>
        <div className='flex items-center justify-center space-x-10'>
          <Image
            src={friend.avatar}
            alt={friend.name}
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>
        <div className='text-center py-3'>
          <h3 className='text-lg font-bold'>{friend.name}</h3>
          <p className='text-gray-500 text-sm'>@{friend.tag}</p>
        </div>
        <div className='text-sm'>
          <p>{friend.location}</p>
          <p>{friend.jobTitle}</p>
        </div>
        <div className='w-full grid'>
          <Button className='mt-4 cursor-pointer' variant='outline'>
            Suivre
          </Button>
          <Button className='mt-4 cursor-pointer bg-blue-300' variant='outline'>
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendCard;
